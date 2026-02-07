// 电影学习数据库 - 应用主逻辑
// =========================================

// 全局状态
let state = {
    currentView: 'dashboard',
    filters: {
        country: '',
        genre: '',
        decade: '',
        movement: ''
    },
    searchQuery: '',
    watchedFilms: {},
    monthlyGoal: 8,
    selectedAward: 'oscar',
    currentUser: null
};

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    initUser();
    initNavigation();
    initFilters();
    initAwardsTabs();
    renderDashboard();
    renderDirectors();
    renderFilms();
    renderAwards();
    updateStats();
});

// 状态管理
function loadState() {
    const saved = localStorage.getItem('filmStudyState');
    if (saved) {
        const parsed = JSON.parse(saved);
        state.watchedFilms = parsed.watchedFilms || {};
        state.monthlyGoal = parsed.monthlyGoal || 8;
    }
}

function saveState() {
    localStorage.setItem('filmStudyState', JSON.stringify({
        watchedFilms: state.watchedFilms,
        monthlyGoal: state.monthlyGoal
    }));
}

// 用户系统
function initUser() {
    const savedUser = localStorage.getItem('filmStudyUser');
    if (savedUser) {
        state.currentUser = JSON.parse(savedUser);
        updateUserDisplay();
    }
}

function saveUser() {
    if (state.currentUser) {
        localStorage.setItem('filmStudyUser', JSON.stringify(state.currentUser));
    } else {
        localStorage.removeItem('filmStudyUser');
    }
}

function updateUserDisplay() {
    const userInfo = document.getElementById('user-info');
    const loginBtn = document.getElementById('login-btn');
    const userAvatar = document.getElementById('user-avatar');
    const userName = document.getElementById('user-name');
    const userStatus = document.getElementById('user-status');

    if (state.currentUser) {
        userInfo.style.display = 'flex';
        loginBtn.style.display = 'none';
        userAvatar.textContent = state.currentUser.name.charAt(0).toUpperCase();
        userName.textContent = state.currentUser.name;
        userStatus.textContent = state.currentUser.email ? '已登录' : '普通会员';
    } else {
        userInfo.style.display = 'none';
        loginBtn.style.display = 'block';
    }
}

function openLoginModal() {
    document.getElementById('login-modal').classList.add('active');
}

function closeLoginModal() {
    document.getElementById('login-modal').classList.remove('active');
    resetLoginForm();
}

let isLoginMode = true;

function toggleLoginMode() {
    isLoginMode = !isLoginMode;
    const title = document.getElementById('login-title');
    const subtitle = document.getElementById('login-subtitle');
    const submitBtn = document.getElementById('login-submit-btn');
    const emailGroup = document.getElementById('email-group');
    const emailInput = document.getElementById('login-email');
    const toggleText = document.getElementById('login-toggle');

    if (isLoginMode) {
        title.textContent = 'Welcome Back';
        subtitle.textContent = 'Sign in to your account';
        submitBtn.textContent = 'Sign In';
        emailGroup.style.display = 'none';
        emailInput.required = false;
        toggleText.innerHTML = 'No account? <a href="#" onclick="toggleLoginMode(); return false;">Register</a>';
    } else {
        title.textContent = 'Create Account';
        subtitle.textContent = 'Join as a member';
        submitBtn.textContent = 'Register';
        emailGroup.style.display = 'block';
        emailInput.required = true;
        toggleText.innerHTML = 'Have an account? <a href="#" onclick="toggleLoginMode(); return false;">Sign In</a>';
    }
}

function resetLoginForm() {
    document.getElementById('login-name').value = '';
    document.getElementById('login-email').value = '';
    isLoginMode = true;
    const title = document.getElementById('login-title');
    const subtitle = document.getElementById('login-subtitle');
    const submitBtn = document.getElementById('login-submit-btn');
    const emailGroup = document.getElementById('email-group');
    const toggleText = document.getElementById('login-toggle');

    title.textContent = 'Welcome Back';
    subtitle.textContent = 'Sign in to your account';
    submitBtn.textContent = 'Sign In';
    emailGroup.style.display = 'none';
    toggleText.innerHTML = 'No account? <a href="#" onclick="toggleLoginMode(); return false;">Register</a>';
}

function handleLogin(event) {
    event.preventDefault();
    const name = document.getElementById('login-name').value.trim();
    const email = document.getElementById('login-email').value.trim();

    if (!name) return;

    if (isLoginMode) {
        // Login
        const users = JSON.parse(localStorage.getItem('filmStudyUsers') || '[]');
        const user = users.find(u => u.name === name);
        if (user) {
            state.currentUser = user;
            saveUser();
            updateUserDisplay();
            closeLoginModal();
        } else {
            alert('User not found. Please register first.');
        }
    } else {
        // Register
        const users = JSON.parse(localStorage.getItem('filmStudyUsers') || '[]');
        const exists = users.some(u => u.name === name);
        if (exists) {
            alert('Username already exists');
            return;
        }
        const newUser = {
            name: name,
            email: email,
            createdAt: new Date().toISOString()
        };
        users.push(newUser);
        localStorage.setItem('filmStudyUsers', JSON.stringify(users));
        state.currentUser = newUser;
        saveUser();
        updateUserDisplay();
        closeLoginModal();
    }
}

// 导航
function initNavigation() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            switchView(view);
        });
    });
}

function switchView(view) {
    state.currentView = view;
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });
    document.querySelectorAll('.view').forEach(v => {
        v.classList.toggle('active', v.id === `view-${view}`);
    });
}

// 筛选器初始化
function initFilters() {
    const countries = [...new Set(DIRECTORS_DATA.map(d => d.country))].sort();
    const genres = [...new Set(DIRECTORS_DATA.flatMap(d => d.films.flatMap(f => f.genre)))].sort();
    const decades = ['1920s', '1930s', '1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'];
    const movements = [...new Set(DIRECTORS_DATA.map(d => d.movement))].sort();

    const countrySelect = document.getElementById('filter-country');
    const genreSelect = document.getElementById('filter-genre');
    const decadeSelect = document.getElementById('filter-decade');
    const movementSelect = document.getElementById('filter-movement');

    countries.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.textContent = c;
        countrySelect.appendChild(opt);
    });

    genres.forEach(g => {
        const opt = document.createElement('option');
        opt.value = g;
        opt.textContent = g;
        genreSelect.appendChild(opt);
    });

    decades.forEach(d => {
        const opt = document.createElement('option');
        opt.value = d;
        opt.textContent = d;
        decadeSelect.appendChild(opt);
    });

    movements.forEach(m => {
        const opt = document.createElement('option');
        opt.value = m;
        opt.textContent = m;
        movementSelect.appendChild(opt);
    });
}

// 奖项标签
function initAwardsTabs() {
    document.querySelectorAll('.award-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.award-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            state.selectedAward = tab.dataset.award;
            renderAwards();
        });
    });
}

// 搜索
function performSearch() {
    state.searchQuery = document.getElementById('search-input').value.toLowerCase();
    applyFilters();
}

document.getElementById('search-input').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') performSearch();
});

// 筛选
function applyFilters() {
    state.filters.country = document.getElementById('filter-country').value;
    state.filters.genre = document.getElementById('filter-genre').value;
    state.filters.decade = document.getElementById('filter-decade').value;
    state.filters.movement = document.getElementById('filter-movement').value;
    performSearch();

    renderDirectors();
    renderFilms();
}

// 获取筛选后的导演
function getFilteredDirectors() {
    return DIRECTORS_DATA.filter(director => {
        // 搜索过滤
        if (state.searchQuery) {
            const matches = director.name.toLowerCase().includes(state.searchQuery) ||
                director.nameEn.toLowerCase().includes(state.searchQuery) ||
                director.films.some(f => f.title.toLowerCase().includes(state.searchQuery) ||
                    f.titleEn.toLowerCase().includes(state.searchQuery) ||
                    f.cast.some(c => c.toLowerCase().includes(state.searchQuery)));
            if (!matches) return false;
        }

        // 国别过滤
        if (state.filters.country && director.country !== state.filters.country) {
            return false;
        }

        // 流派过滤
        if (state.filters.movement && director.movement !== state.filters.movement) {
            return false;
        }

        return true;
    });
}

// 获取筛选后的影片
function getFilteredFilms() {
    return DIRECTORS_DATA.flatMap(director =>
        director.films
            .filter(film => {
                // 搜索过滤
                if (state.searchQuery) {
                    const matches = film.title.toLowerCase().includes(state.searchQuery) ||
                        film.titleEn.toLowerCase().includes(state.searchQuery) ||
                        film.cast.some(c => c.toLowerCase().includes(state.searchQuery)) ||
                        director.name.toLowerCase().includes(state.searchQuery);
                    if (!matches) return false;
                }

                // 类型过滤
                if (state.filters.genre && !film.genre.includes(state.filters.genre)) {
                    return false;
                }

                // 年代过滤
                if (state.filters.decade) {
                    const decade = `${Math.floor(film.year / 10) * 10}s`;
                    if (decade !== state.filters.decade) return false;
                }

                return true;
            })
            .map(film => ({ ...film, director: director }))
    );
}

// 渲染仪表盘
function renderDashboard() {
    const watchedThisMonth = getWatchedThisMonth();
    document.getElementById('monthly-watched').textContent = watchedThisMonth;

    // 导演完成度
    const directorCompletion = document.getElementById('director-completion');
    const directors = DIRECTORS_DATA.slice(0, 5);
    directorCompletion.innerHTML = directors.map(d => {
        const watched = d.films.filter(f => state.watchedFilms[f.id]).length;
        const total = d.films.length;
        const percent = total > 0 ? Math.round(watched / total * 100) : 0;
        return `
            <div class="director-progress-item">
                <span class="director-name-short">${d.name}</span>
                <div class="mini-progress-bar">
                    <div class="mini-progress-fill" style="width: ${percent}%"></div>
                </div>
                <span class="progress-label">${watched}/${total}</span>
            </div>
        `;
    }).join('');

    // 最近观看
    const recentWatched = document.getElementById('recent-watched');
    const recentFilms = Object.entries(state.watchedFilms)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 4)
        .map(([filmId, timestamp]) => {
            const film = findFilmById(filmId);
            if (!film) return '';
            return `
                <div class="recent-film-item">
                    <span class="recent-title">${film.title}</span>
                    <span class="recent-director">${film.director.name}</span>
                    <span class="recent-date">${new Date(timestamp).toLocaleDateString()}</span>
                </div>
            `;
        }).join('');

    recentWatched.innerHTML = recentFilms || '<p class="no-data">No watch history</p>';

    // 推荐观看
    const recommendations = document.getElementById('recommendations');
    const unwatchedFilms = DIRECTORS_DATA
        .flatMap(d => d.films.map(f => ({ ...f, director: d })))
        .filter(f => !state.watchedFilms[f.id])
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);

    recommendations.innerHTML = unwatchedFilms.map(f => `
        <div class="rec-film" onclick="showFilmDetail('${f.id}')">
            <span class="rec-title">${f.title}</span>
            <span class="rec-meta">${f.director.name} | ${f.year} | ${f.rating}</span>
        </div>
    `).join('');
}

// 渲染导演列表
function renderDirectors() {
    const grid = document.getElementById('directors-grid');
    const filtered = getFilteredDirectors();
    const count = document.getElementById('directors-count');

    count.textContent = `(${filtered.length})`;

    grid.innerHTML = filtered.map(director => {
        const watched = director.films.filter(f => state.watchedFilms[f.id]).length;
        const total = director.films.length;
        const percent = total > 0 ? Math.round(watched / total * 100) : 0;

        return `
            <div class="director-card" onclick="showDirectorDetail('${director.id}')">
                <div class="director-header">
                    <div>
                        <div class="director-name">${director.name}</div>
                        <div class="director-name-en">${director.nameEn}</div>
                    </div>
                    <span class="director-country">${director.country}</span>
                </div>
                <div class="director-meta">${director.movement} | ${director.birth}-${director.death || 'Present'}</div>
                <div class="director-style">${director.style.substring(0, 100)}${director.style.length > 100 ? '...' : ''}</div>
                <div class="director-progress">
                    <div class="director-progress-bar">
                        <div class="director-progress-fill" style="width: ${percent}%"></div>
                    </div>
                    <span class="director-progress-text">${watched}/${total} (${percent}%)</span>
                </div>
            </div>
        `;
    }).join('');
}

// 渲染影片列表
function renderFilms() {
    const grid = document.getElementById('films-grid');
    const filtered = getFilteredFilms();
    const count = document.getElementById('films-count');

    count.textContent = `(${filtered.length})`;

    grid.innerHTML = filtered.map(film => {
        const isWatched = !!state.watchedFilms[film.id];
        const letter = film.title.charAt(0);

        return `
            <div class="film-card" onclick="showFilmDetail('${film.id}')">
                <button class="watch-btn ${isWatched ? 'watched' : ''}"
                        onclick="event.stopPropagation(); toggleWatch('${film.id}')"
                        title="${isWatched ? 'Watched' : 'Mark as watched'}">
                    ${isWatched ? '&#10003;' : '&#9679;'}
                </button>
                <span class="film-card-year">${film.year}</span>
                <div class="film-poster">
                    <span class="film-poster-letter">${letter}</span>
                </div>
                <div class="film-info">
                    <div class="film-title">${film.title}</div>
                    <div class="film-year">${film.director.name} | ${film.year}</div>
                    <div class="film-rating">
                        <span class="star">&#9733;</span>
                        <span class="score">${film.rating}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// 渲染奖项内容
function renderAwards() {
    const content = document.getElementById('awards-content');
    const award = AWARDS_DATA[state.selectedAward];

    content.innerHTML = `
        <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 24px; color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.05em;">${award.icon} ${award.name}</h3>
        <div class="films-grid">
            ${award.films.map(item => `
                <div class="film-card" onclick="showFilmDetail('${item.film.id}')">
                    <span class="film-card-year">${item.film.year}</span>
                    <div class="film-poster">
                        <span class="film-poster-letter">${item.film.title.charAt(0)}</span>
                    </div>
                    <div class="film-info">
                        <div class="film-title">${item.film.title}</div>
                        <div class="film-year">${item.director} | ${item.film.year}</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// 影片详情模态框
function showFilmDetail(filmId) {
    const film = findFilmById(filmId);
    if (!film) return;

    const modal = document.getElementById('film-modal');
    const body = document.getElementById('modal-body');
    const isWatched = !!state.watchedFilms[filmId];
    const letter = film.title.charAt(0);

    body.innerHTML = `
        <div class="modal-film-header">
            <div class="modal-poster">
                <span class="modal-poster-letter">${letter}</span>
                <span class="modal-poster-year">${film.year}</span>
            </div>
            <div class="modal-film-info">
                <h2>${film.title}</h2>
                <div class="meta">${film.titleEn} | ${film.year} | ${film.duration}min</div>
                <div class="meta">${film.genre.join(' / ')}</div>
                <div class="meta"><strong>Director:</strong> ${film.director.name}</div>
                <div class="meta"><strong>Cast:</strong> ${film.cast.join(' / ')}</div>
                <div class="film-rating">
                    <span class="star">&#9733;</span>
                    <span class="score">${film.rating}</span>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <h3>Status</h3>
            <button class="streaming-link" onclick="toggleWatch('${filmId}')">
                ${isWatched ? '&#10003; Watched' : '&#9679; Mark as watched'}
            </button>
        </div>

        ${film.awards && film.awards.length > 0 ? `
            <div class="modal-section">
                <h3>Awards</h3>
                <div class="awards-list">
                    ${film.awards.map(a => `<span class="award-badge">${a}</span>`).join('')}
                </div>
            </div>
        ` : ''}

        ${film.streaming && film.streaming.length > 0 ? `
            <div class="modal-section">
                <h3>Streaming</h3>
                <div class="streaming-links">
                    ${film.streaming.map(s => `<span class="streaming-link">${s}</span>`).join('')}
                </div>
            </div>
        ` : ''}
    `;

    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('film-modal').classList.remove('active');
}

// 导演详情模态框
function showDirectorDetail(directorId) {
    const director = DIRECTORS_DATA.find(d => d.id === directorId);
    if (!director) return;

    const modal = document.getElementById('director-modal');
    const body = document.getElementById('director-modal-body');
    const letter = director.name.charAt(0);

    // 按年份排序影片
    const sortedFilms = [...director.films].sort((a, b) => a.year - b.year);

    body.innerHTML = `
        <div class="director-detail-header">
            <div class="director-avatar">
                <span class="director-avatar-letter">${letter}</span>
            </div>
            <div class="director-detail-info">
                <h2>${director.name}</h2>
                <div class="name-en">${director.nameEn}</div>
                <div class="meta">${director.movement} | ${director.country} | ${director.birth}-${director.death || 'Present'}</div>
            </div>
        </div>

        <div class="director-bio">
            ${director.style}
        </div>

        ${director.awards.length > 0 ? `
            <div class="modal-section">
                <h3>Awards</h3>
                <div class="awards-list">
                    ${director.awards.map(a => `<span class="award-badge">${a}</span>`).join('')}
                </div>
            </div>
        ` : ''}

        <div class="modal-section">
            <h3>Filmography (${sortedFilms.length} films, sorted by year)</h3>
            <div class="director-films-grid">
                ${sortedFilms.map(film => {
                    const isWatched = !!state.watchedFilms[film.id];
                    return `
                        <div class="film-card" onclick="showFilmDetail('${film.id}')" style="cursor: pointer;">
                            <button class="watch-btn ${isWatched ? 'watched' : ''}"
                                    onclick="event.stopPropagation(); toggleWatch('${film.id}')"
                                    title="${isWatched ? 'Watched' : 'Mark as watched'}">
                                ${isWatched ? '&#10003;' : '&#9679;'}
                            </button>
                            <span class="film-card-year">${film.year}</span>
                            <div class="film-poster">
                                <span class="film-poster-letter">${film.title.charAt(0)}</span>
                            </div>
                            <div class="film-info">
                                <div class="film-title">${film.title}</div>
                                <div class="film-year-badge">${film.year} | ${film.rating}</div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;

    modal.classList.add('active');
}

function closeDirectorModal() {
    document.getElementById('director-modal').classList.remove('active');
}

// 切换观看状态
function toggleWatch(filmId) {
    if (state.watchedFilms[filmId]) {
        delete state.watchedFilms[filmId];
    } else {
        state.watchedFilms[filmId] = Date.now();
    }
    saveState();
    updateStats();
    renderDashboard();
    renderFilms();
    renderDirectors();

    // 如果是影片详情页，刷新模态框
    const modal = document.getElementById('film-modal');
    if (modal.classList.contains('active')) {
        showFilmDetail(filmId);
    }
}

// 更新统计
function updateStats() {
    const totalFilms = DIRECTORS_DATA.reduce((sum, d) => sum + d.films.length, 0);
    const watchedCount = Object.keys(state.watchedFilms).length;
    const percent = totalFilms > 0 ? Math.round(watchedCount / totalFilms * 100) : 0;

    document.getElementById('watched-count').textContent = watchedCount;
    document.getElementById('total-films').textContent = totalFilms;
    document.getElementById('progress-fill').style.width = `${percent}%`;
    document.getElementById('progress-text').textContent = `${percent}%`;
    document.getElementById('monthly-target').textContent = state.monthlyGoal;
}

// 获取本月观看数
function getWatchedThisMonth() {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    return Object.entries(state.watchedFilms)
        .filter(([_, timestamp]) => new Date(timestamp) >= startOfMonth)
        .length;
}

// 生成分月观影计划
function generateMonthlyPlan() {
    const focus = document.getElementById('plan-focus').value;
    let plan = [];
    const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];

    // 获取未观看的影片
    let availableFilms = DIRECTORS_DATA
        .flatMap(d => d.films.map(f => ({ ...f, director: d })))
        .filter(f => !state.watchedFilms[f.id]);

    if (focus === 'director') {
        // 专注单一导演 - 选择影片最多的导演
        const director = DIRECTORS_DATA
            .map(d => ({ ...d, unwatched: d.films.filter(f => !state.watchedFilms[f.id]).length }))
            .sort((a, b) => b.unwatched - a.unwatched)[0];

        plan = director.films
            .filter(f => !state.watchedFilms[f.id])
            .slice(0, 4);
    } else if (focus === 'movement') {
        // 按流派
        availableFilms.sort((a, b) => b.rating - a.rating);
        plan = availableFilms.slice(0, 4);
    } else if (focus === 'country') {
        // 按国家 - 随机选择4个不同国家的影片
        const byCountry = {};
        availableFilms.forEach(f => {
            if (!byCountry[f.director.country]) {
                byCountry[f.director.country] = [];
            }
            byCountry[f.director.country].push(f);
        });
        plan = Object.values(byCountry).slice(0, 4).map(films => films[0]);
    } else {
        // 均衡 - 随机选择4部高评分影片
        availableFilms.sort((a, b) => b.rating - a.rating);
        plan = availableFilms.slice(0, 4);
    }

    // 渲染计划
    const container = document.getElementById('monthly-plan');
    container.innerHTML = weeks.map((week, i) => `
        <div class="plan-week">
            <h4>${week}</h4>
            ${plan[i] ? `
                <div class="plan-film" onclick="showFilmDetail('${plan[i].id}')" style="cursor: pointer;">
                    <div class="plan-film-letter">${plan[i].title.charAt(0)}</div>
                    <div>
                        <div class="plan-film-title">${plan[i].title}</div>
                        <div class="plan-film-meta">${plan[i].director.name} | ${plan[i].year} | ${plan[i].rating}</div>
                    </div>
                </div>
            ` : '<div class="no-data">No recommendation</div>'}
        </div>
    `).join('');
}

// 辅助函数
function findFilmById(filmId) {
    for (const director of DIRECTORS_DATA) {
        const film = director.films.find(f => f.id === filmId);
        if (film) {
            return { ...film, director };
        }
    }
    return null;
}

// 导出功能
function exportToJSON() {
    const data = {
        directors: DIRECTORS_DATA,
        watchHistory: state.watchedFilms,
        user: state.currentUser,
        exportDate: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `film-study-database-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function exportToExcel() {
    // 生成CSV格式
    const rows = [['Director', 'Director(EN)', 'Country', 'Movement', 'Film', 'Film(EN)', 'Year', 'Rating', 'Genre', 'Status', 'Watch Date']];

    DIRECTORS_DATA.forEach(director => {
        director.films.forEach(film => {
            const isWatched = !!state.watchedFilms[film.id];
            rows.push([
                director.name,
                director.nameEn,
                director.country,
                director.movement,
                film.title,
                film.titleEn,
                film.year,
                film.rating,
                film.genre.join('; '),
                isWatched ? 'Watched' : 'Unwatched',
                isWatched ? new Date(state.watchedFilms[film.id]).toLocaleDateString() : ''
            ]);
        });
    });

    const csv = rows.map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `film-study-database-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
}

// 点击模态框外部关闭
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// ESC键关闭模态框
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
    }
});
