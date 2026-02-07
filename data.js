// 电影学习数据库 - 导演与影片数据

var DIRECTORS_DATA = [
    {
        id: "kubrick",
        name: "斯坦利-库布里克",
        nameEn: "Stanley Kubrick",
        country: "美国",
        countryFlag: "US",
        birth: 1928,
        death: 1999,
        movement: "新好莱坞",
        style: "完美主义者，以精确的视觉构图、对称美学和深刻的哲学主题著称。",
        awards: ["威尼斯银狮奖", "英国电影学院奖"],
        films: [
            { id: "2001", title: "2001太空漫游", titleEn: "2001: A Space Odyssey", year: 1968, genre: ["科幻"], duration: 149, rating: 8.8, cast: ["基尔-杜拉", "加里-洛克伍德"], awards: ["奥斯卡最佳视觉效果"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "clockwork", title: "发条橙", titleEn: "A Clockwork Orange", year: 1971, genre: ["犯罪", "科幻"], duration: 136, rating: 8.3, cast: ["马尔科姆-麦克道威尔"], awards: ["纽约影评人协会奖"], streaming: ["Amazon Prime"] },
            { id: "shining", title: "闪灵", titleEn: "The Shining", year: 1980, genre: ["恐怖"], duration: 146, rating: 8.4, cast: ["杰克-尼科尔森", "谢莉-杜瓦尔"], awards: [], streaming: ["Netflix", "HBO Max"] },
            { id: "fmj", title: "全金属外壳", titleEn: "Full Metal Jacket", year: 1987, genre: ["战争"], duration: 116, rating: 8.3, cast: ["马修-莫迪恩", "文森特-多诺弗里奥"], awards: [], streaming: ["Amazon Prime"] },
            { id: "barry", title: "巴里-林登", titleEn: "Barry Lyndon", year: 1975, genre: ["剧情", "历史"], duration: 185, rating: 8.1, cast: ["瑞安-奥尼尔"], awards: ["奥斯卡最佳摄影", "奥斯卡最佳艺术指导"], streaming: ["HBO Max"] },
            { id: "strangelove", title: "奇爱博士", titleEn: "Dr. Strangelove", year: 1964, genre: ["喜剧", "战争"], duration: 95, rating: 8.4, cast: ["彼得-塞勒斯"], awards: ["英国电影学院奖"], streaming: ["Amazon Prime"] },
            { id: "paths", title: "光荣之路", titleEn: "Paths of Glory", year: 1957, genre: ["战争", "剧情"], duration: 88, rating: 8.4, cast: ["柯克-道格拉斯"], awards: [], streaming: ["Amazon Prime"] },
            { id: "eyes", title: "大开眼戒", titleEn: "Eyes Wide Shut", year: 1999, genre: ["剧情", "悬疑"], duration: 159, rating: 7.5, cast: ["汤姆-克鲁斯", "妮可-基德曼"], awards: [], streaming: ["Netflix"] }
        ]
    },
    {
        id: "hitchcock",
        name: "阿尔弗雷德-希区柯克",
        nameEn: "Alfred Hitchcock",
        country: "英国",
        countryFlag: "UK",
        birth: 1899,
        death: 1980,
        movement: "经典好莱坞",
        style: "悬疑大师，以精妙的叙事技巧、心理惊悚和标志性的视觉风格著称。",
        awards: ["美国电影学会终身成就奖", "金球奖"],
        films: [
            { id: "vertigo", title: "迷魂记", titleEn: "Vertigo", year: 1958, genre: ["悬疑", "爱情"], duration: 128, rating: 8.3, cast: ["詹姆斯-斯图尔特", "金-诺瓦克"], awards: [], streaming: ["Amazon Prime"] },
            { id: "psycho", title: "惊魂记", titleEn: "Psycho", year: 1960, genre: ["恐怖", "悬疑"], duration: 109, rating: 8.5, cast: ["安东尼-珀金斯", "珍妮特-利"], awards: ["金球奖"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "rearwindow", title: "后窗", titleEn: "Rear Window", year: 1954, genre: ["悬疑", "惊悚"], duration: 112, rating: 8.5, cast: ["詹姆斯-斯图尔特", "格蕾丝-凯利"], awards: [], streaming: ["Amazon Prime"] },
            { id: "birds", title: "群鸟", titleEn: "The Birds", year: 1963, genre: ["恐怖", "悬疑"], duration: 119, rating: 7.7, cast: ["蒂比-海德莉", "罗德-泰勒"], awards: [], streaming: ["Amazon Prime"] },
            { id: "nxnw", title: "西北偏北", titleEn: "North by Northwest", year: 1959, genre: ["动作", "悬疑"], duration: 136, rating: 8.3, cast: ["加里-格兰特", "爱娃-玛丽-森特"], awards: [], streaming: ["HBO Max"] }
        ]
    },
    {
        id: "scorsese",
        name: "马丁-斯科塞斯",
        nameEn: "Martin Scorsese",
        country: "美国",
        countryFlag: "US",
        birth: 1942,
        death: null,
        movement: "新好莱坞",
        style: "美国电影的活化石，以犯罪题材和对美国社会的深刻剖析著称。",
        awards: ["奥斯卡最佳导演", "金球奖", "戛纳金棕榈"],
        films: [
            { id: "taxi", title: "出租车司机", titleEn: "Taxi Driver", year: 1976, genre: ["犯罪", "剧情"], duration: 114, rating: 8.2, cast: ["罗伯特-德尼罗", "朱迪-福斯特"], awards: ["戛纳金棕榈奖"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "goodfellas", title: "好家伙", titleEn: "Goodfellas", year: 1990, genre: ["犯罪", "传记"], duration: 145, rating: 8.7, cast: ["罗伯特-德尼罗", "雷-利奥塔", "乔-佩西"], awards: ["奥斯卡最佳男配角"], streaming: ["Netflix", "HBO Max"] },
            { id: "ragingbull", title: "愤怒的公牛", titleEn: "Raging Bull", year: 1980, genre: ["传记", "运动"], duration: 129, rating: 8.2, cast: ["罗伯特-德尼罗"], awards: ["奥斯卡最佳男主角", "奥斯卡最佳剪辑"], streaming: ["Amazon Prime"] },
            { id: "departed", title: "无间行者", titleEn: "The Departed", year: 2006, genre: ["犯罪", "惊悚"], duration: 151, rating: 8.5, cast: ["莱昂纳多-迪卡普里奥", "马特-达蒙", "杰克-尼科尔森"], awards: ["奥斯卡最佳影片", "奥斯卡最佳导演"], streaming: ["Netflix"] },
            { id: "casino", title: "赌城风云", titleEn: "Casino", year: 1995, genre: ["犯罪", "剧情"], duration: 178, rating: 8.2, cast: ["罗伯特-德尼罗", "莎朗-斯通", "乔-佩西"], awards: [], streaming: ["Amazon Prime"] },
            { id: "wolf", title: "华尔街之狼", titleEn: "The Wolf of Wall Street", year: 2013, genre: ["传记", "喜剧"], duration: 180, rating: 8.2, cast: ["莱昂纳多-迪卡普里奥", "乔纳-希尔"], awards: [], streaming: ["Netflix", "Amazon Prime"] }
        ]
    },
    {
        id: "spielberg",
        name: "史蒂文-斯皮尔伯格",
        nameEn: "Steven Spielberg",
        country: "美国",
        countryFlag: "US",
        birth: 1946,
        death: null,
        movement: "新好莱坞",
        style: "商业与艺术的完美结合者，擅长创造视觉奇观和情感共鸣。",
        awards: ["奥斯卡最佳导演x2", "金球奖", "柏林金熊奖"],
        films: [
            { id: "schindler", title: "辛德勒的名单", titleEn: "Schindler's List", year: 1993, genre: ["传记", "历史"], duration: 195, rating: 9.0, cast: ["连姆-尼森", "拉尔夫-费因斯", "本-金斯利"], awards: ["奥斯卡最佳影片", "奥斯卡最佳导演"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "ryan", title: "拯救大兵瑞恩", titleEn: "Saving Private Ryan", year: 1998, genre: ["战争", "剧情"], duration: 169, rating: 8.6, cast: ["汤姆-汉克斯", "马特-达蒙"], awards: ["奥斯卡最佳导演"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "jaws", title: "大白鲨", titleEn: "Jaws", year: 1975, genre: ["惊悚", "冒险"], duration: 124, rating: 8.0, cast: ["罗伊-施奈德", "罗伯特-肖"], awards: ["奥斯卡最佳剪辑"], streaming: ["Amazon Prime"] },
            { id: "et", title: "E.T.外星人", titleEn: "E.T. the Extra-Terrestrial", year: 1982, genre: ["科幻", "家庭"], duration: 115, rating: 7.9, cast: ["亨利-托马斯", "德鲁-巴里摩尔"], awards: ["奥斯卡最佳视觉效果"], streaming: ["Netflix"] },
            { id: "jp", title: "侏罗纪公园", titleEn: "Jurassic Park", year: 1993, genre: ["科幻", "冒险"], duration: 127, rating: 8.2, cast: ["山姆-尼尔", "劳拉-邓恩", "杰夫-高布伦"], awards: ["奥斯卡最佳视觉效果"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "raiders", title: "夺宝奇兵", titleEn: "Raiders of the Lost Ark", year: 1981, genre: ["动作", "冒险"], duration: 115, rating: 8.4, cast: ["哈里森-福特"], awards: ["奥斯卡最佳视觉效果"], streaming: ["Disney+"] }
        ]
    },
    {
        id: "coppola",
        name: "弗朗西斯-福特-科波拉",
        nameEn: "Francis Ford Coppola",
        country: "美国",
        countryFlag: "US",
        birth: 1939,
        death: null,
        movement: "新好莱坞",
        style: "史诗叙事大师，以《教父》系列定义了黑帮电影的美学标准。",
        awards: ["奥斯卡最佳导演", "戛纳金棕榈x2", "金球奖"],
        films: [
            { id: "godfather1", title: "教父", titleEn: "The Godfather", year: 1972, genre: ["犯罪", "剧情"], duration: 175, rating: 9.2, cast: ["马龙-白兰度", "阿尔-帕西诺", "詹姆斯-凯恩"], awards: ["奥斯卡最佳影片", "奥斯卡最佳男主角"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "godfather2", title: "教父2", titleEn: "The Godfather Part II", year: 1974, genre: ["犯罪", "剧情"], duration: 202, rating: 9.0, cast: ["阿尔-帕西诺", "罗伯特-德尼罗"], awards: ["奥斯卡最佳影片", "奥斯卡最佳导演"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "apocalypse", title: "现代启示录", titleEn: "Apocalypse Now", year: 1979, genre: ["战争", "剧情"], duration: 147, rating: 8.4, cast: ["马丁-辛", "马龙-白兰度"], awards: ["戛纳金棕榈奖"], streaming: ["Netflix"] }
        ]
    },
    {
        id: "tarantino",
        name: "昆汀-塔伦蒂诺",
        nameEn: "Quentin Tarantino",
        country: "美国",
        countryFlag: "US",
        birth: 1963,
        death: null,
        movement: "后现代主义",
        style: "后现代电影代表人物，以非线性叙事、犀利对白、暴力美学著称。",
        awards: ["奥斯卡最佳原创剧本x2", "戛纳金棕榈", "金球奖"],
        films: [
            { id: "pulp", title: "低俗小说", titleEn: "Pulp Fiction", year: 1994, genre: ["犯罪", "剧情"], duration: 154, rating: 8.9, cast: ["约翰-特拉沃尔塔", "塞缪尔-杰克逊", "乌玛-瑟曼"], awards: ["戛纳金棕榈奖", "奥斯卡最佳原创剧本"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "reservoir", title: "落水狗", titleEn: "Reservoir Dogs", year: 1992, genre: ["犯罪", "惊悚"], duration: 99, rating: 8.3, cast: ["哈维-凯特尔", "蒂姆-罗斯", "史蒂夫-布西密"], awards: [], streaming: ["Amazon Prime"] },
            { id: "killbill1", title: "杀死比尔", titleEn: "Kill Bill: Vol. 1", year: 2003, genre: ["动作", "犯罪"], duration: 111, rating: 8.2, cast: ["乌玛-瑟曼", "刘玉玲"], awards: [], streaming: ["Netflix", "Amazon Prime"] },
            { id: "inglourious", title: "无耻混蛋", titleEn: "Inglourious Basterds", year: 2009, genre: ["战争", "剧情"], duration: 153, rating: 8.3, cast: ["布拉德-皮特", "克里斯托弗-瓦尔兹"], awards: ["奥斯卡最佳男配角"], streaming: ["Netflix"] },
            { id: "django", title: "被解救的姜戈", titleEn: "Django Unchained", year: 2012, genre: ["西部", "剧情"], duration: 165, rating: 8.4, cast: ["杰米-福克斯", "克里斯托弗-瓦尔兹", "莱昂纳多-迪卡普里奥"], awards: ["奥斯卡最佳原创剧本", "奥斯卡最佳男配角"], streaming: ["Netflix", "Amazon Prime"] }
        ]
    },
    {
        id: "nolan",
        name: "克里斯托弗-诺兰",
        nameEn: "Christopher Nolan",
        country: "英国",
        countryFlag: "UK",
        birth: 1970,
        death: null,
        movement: "当代大师",
        style: "以复杂的叙事结构、视觉奇观和深刻的哲学主题著称。",
        awards: ["奥斯卡最佳影片", "金球奖最佳导演", "英国电影学院奖"],
        films: [
            { id: "inception", title: "盗梦空间", titleEn: "Inception", year: 2010, genre: ["科幻", "动作"], duration: 148, rating: 9.4, cast: ["莱昂纳多-迪卡普里奥", "约瑟夫-高登-莱维特", "汤姆-哈迪"], awards: ["奥斯卡最佳视觉效果", "奥斯卡最佳音效剪辑"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "darkknight", title: "蝙蝠侠：黑暗骑士", titleEn: "The Dark Knight", year: 2008, genre: ["动作", "犯罪"], duration: 152, rating: 9.0, cast: ["克里斯蒂安-贝尔", "希斯-莱杰", "摩根-弗里曼"], awards: ["奥斯卡最佳男配角"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "interstellar", title: "星际穿越", titleEn: "Interstellar", year: 2014, genre: ["科幻", "冒险"], duration: 169, rating: 8.7, cast: ["马修-麦康纳", "安妮-海瑟薇", "杰西卡-查斯坦"], awards: ["奥斯卡最佳视觉效果"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "prestige", title: "致命魔术", titleEn: "The Prestige", year: 2006, genre: ["悬疑", "科幻"], duration: 130, rating: 8.5, cast: ["克里斯蒂安-贝尔", "休-杰克曼", "斯嘉丽-约翰逊"], awards: [], streaming: ["Netflix", "Amazon Prime"] },
            { id: "memento", title: "记忆碎片", titleEn: "Memento", year: 2000, genre: ["悬疑", "惊悚"], duration: 113, rating: 8.4, cast: ["盖-皮尔斯", "凯瑞-安-莫斯"], awards: [], streaming: ["Amazon Prime"] },
            { id: "dunkirk", title: "敦刻尔克", titleEn: "Dunkirk", year: 2017, genre: ["战争", "剧情"], duration: 106, rating: 7.8, cast: ["菲恩-怀特海德", "汤姆-哈迪", "肯尼思-布拉纳"], awards: ["奥斯卡最佳剪辑"], streaming: ["Netflix"] },
            { id: "oppenheimer", title: "奥本海默", titleEn: "Oppenheimer", year: 2023, genre: ["传记", "剧情"], duration: 180, rating: 8.5, cast: ["基里安-墨菲", "艾米莉-布朗特", "马特-达蒙"], awards: ["奥斯卡最佳影片", "奥斯卡最佳导演"], streaming: ["Netflix", "Amazon Prime"] }
        ]
    },
    {
        id: "fincher",
        name: "大卫-芬奇",
        nameEn: "David Fincher",
        country: "美国",
        countryFlag: "US",
        birth: 1962,
        death: null,
        movement: "当代大师",
        style: "以精确的视觉风格、黑暗的主题和对细节的极致追求著称。",
        awards: ["金球奖", "BAFTA"],
        films: [
            { id: "fightclub", title: "搏击俱乐部", titleEn: "Fight Club", year: 1999, genre: ["剧情"], duration: 139, rating: 8.8, cast: ["布拉德-皮特", "爱德华-诺顿", "海伦娜-伯翰-卡特"], awards: [], streaming: ["Netflix", "Amazon Prime"] },
            { id: "se7en", title: "七宗罪", titleEn: "Se7en", year: 1995, genre: ["悬疑", "惊悚"], duration: 127, rating: 8.6, cast: ["布拉德-皮特", "摩根-弗里曼", "凯文-史派西"], awards: [], streaming: ["Netflix", "Amazon Prime"] },
            { id: "zodiac", title: "十二宫", titleEn: "Zodiac", year: 2007, genre: ["悬疑", "惊悚"], duration: 157, rating: 7.6, cast: ["杰克-吉伦哈尔", "马克-鲁弗洛", "罗伯特-Downey-Jr"], awards: [], streaming: ["HBO Max"] },
            { id: "socialnetwork", title: "社交网络", titleEn: "The Social Network", year: 2010, genre: ["传记", "剧情"], duration: 120, rating: 7.8, cast: ["杰西-艾森伯格", "安德鲁-加菲尔德", "贾斯汀-汀布莱克"], awards: ["金球奖最佳影片", "奥斯卡最佳改编剧本"], streaming: ["Netflix"] },
            { id: "gonegirl", title: "消失的爱人", titleEn: "Gone Girl", year: 2014, genre: ["悬疑", "惊悚"], duration: 149, rating: 8.1, cast: ["本-阿弗莱克", "罗莎蒙德-派克"], awards: [], streaming: ["Netflix", "Amazon Prime"] }
        ]
    },
    {
        id: "kurosawa",
        name: "黑泽明",
        nameEn: "Akira Kurosawa",
        country: "日本",
        countryFlag: "JP",
        birth: 1910,
        death: 1998,
        movement: "日本电影黄金期",
        style: "日本电影天皇，以史诗级的叙事、精彩的群像戏著称。",
        awards: ["奥斯卡终身成就奖", "威尼斯金狮x2", "戛纳大奖"],
        films: [
            { id: "sevenSamurai", title: "七武士", titleEn: "Seven Samurai", year: 1954, genre: ["动作", "剧情"], duration: 207, rating: 9.6, cast: ["三船敏郎", "志村乔", "津岛惠子"], awards: [], streaming: ["Amazon Prime"] },
            { id: "rashomon", title: "罗生门", titleEn: "Rashomon", year: 1950, genre: ["剧情", "犯罪"], duration: 88, rating: 8.8, cast: ["三船敏郎", "京町子", "森雅之"], awards: ["威尼斯金狮奖"], streaming: ["Amazon Prime", "HBO Max"] },
            { id: "throne", title: "生之欲", titleEn: "Ikiru", year: 1952, genre: ["剧情"], duration: 143, rating: 8.9, cast: ["志村乔", "稻叶义男"], awards: [], streaming: ["Criterion Channel"] },
            { id: "san", title: "蜘蛛巢城", titleEn: "Throne of Blood", year: 1957, genre: ["动作", "剧情"], duration: 110, rating: 8.1, cast: ["三船敏郎", "山村聪"], awards: [], streaming: ["Amazon Prime"] },
            { id: "kagemusha", title: "影武者", titleEn: "Kagemusha", year: 1980, genre: ["动作", "历史"], duration: 180, rating: 8.0, cast: ["仲代达矢", "山崎努"], awards: ["戛纳金棕榈奖"], streaming: ["Amazon Prime"] },
            { id: "ran", title: "乱", titleEn: "Ran", year: 1985, genre: ["动作", "剧情"], duration: 162, rating: 8.2, cast: ["仲代达矢", "原田美枝子"], awards: ["奥斯卡最佳服装设计"], streaming: ["Amazon Prime", "HBO Max"] }
        ]
    },
    {
        id: "miyazaki",
        name: "宫崎骏",
        nameEn: "Hayao Miyazaki",
        country: "日本",
        countryFlag: "JP",
        birth: 1941,
        death: null,
        movement: "吉卜力",
        style: "动画大师，以诗意的想象力、环保主题和细腻的手绘动画著称。",
        awards: ["奥斯卡最佳动画长片x2", "威尼斯金狮奖", "柏林金熊奖"],
        films: [
            { id: "spirited", title: "千与千寻", titleEn: "Spirited Away", year: 2001, genre: ["动画", "奇幻"], duration: 125, rating: 9.4, cast: ["柊瑠美", "入野自由"], awards: ["奥斯卡最佳动画长片", "柏林金熊奖"], streaming: ["Netflix", "HBO Max", "Disney+"] },
            { id: "mononoke", title: "幽灵公主", titleEn: "Princess Mononoke", year: 1997, genre: ["动画", "奇幻"], duration: 134, rating: 8.9, cast: ["松田洋治", "石田百合子"], awards: ["日本电影学院奖最佳影片"], streaming: ["Netflix", "Disney+"] },
            { id: "totoro", title: "龙猫", titleEn: "My Neighbor Totoro", year: 1988, genre: ["动画", "家庭"], duration: 86, rating: 8.7, cast: ["日高法子", "坂本千夏"], awards: [], streaming: ["Netflix", "Disney+"] },
            { id: "howl", title: "哈尔的移动城堡", titleEn: "Howl's Moving Castle", year: 2004, genre: ["动画", "奇幻"], duration: 119, rating: 8.0, cast: ["倍赏千惠子", "木村拓哉"], awards: ["奥斯卡最佳动画提名"], streaming: ["Netflix", "Disney+"] },
            { id: "castle", title: "天空之城", titleEn: "Laputa: Castle in the Sky", year: 1986, genre: ["动画", "冒险"], duration: 124, rating: 8.0, cast: ["田中真弓", "横泽启子"], awards: [], streaming: ["Netflix", "Disney+"] },
            { id: "princess", title: "风之谷", titleEn: "Nausicaa of the Valley of the Wind", year: 1984, genre: ["动画", "奇幻"], duration: 117, rating: 8.1, cast: ["岛本须美", "京田尚子"], awards: [], streaming: ["Netflix", "Disney+"] },
            { id: "porco", title: "红猪", titleEn: "Porco Rosso", year: 1992, genre: ["动画", "冒险"], duration: 94, rating: 8.2, cast: ["森山周一郎", "冈田准次"], awards: [], streaming: ["Netflix", "Disney+"] },
            { id: "kiki", title: "魔女宅急便", titleEn: "Kiki's Delivery Service", year: 1989, genre: ["动画", "家庭"], duration: 102, rating: 8.0, cast: ["高山南", "佐久间玲"], awards: [], streaming: ["Netflix", "Disney+"] }
        ]
    },
    {
        id: "wong",
        name: "王家卫",
        nameEn: "Wong Kar-wai",
        country: "中国香港",
        countryFlag: "HK",
        birth: 1958,
        death: null,
        movement: "香港艺术电影",
        style: "都市爱情诗人，以独特的视觉风格、慢镜头、怀旧情绪著称。",
        awards: ["戛纳最佳导演", "威尼斯金狮", "金球奖"],
        films: [
            { id: "chungking", title: "重庆森林", titleEn: "Chungking Express", year: 1994, genre: ["剧情", "爱情"], duration: 102, rating: 8.0, cast: ["梁朝伟", "王菲", "金城武", "林青霞"], awards: [], streaming: ["Netflix", "Amazon Prime"] },
            { id: "inmoon", title: "春光乍泄", titleEn: "Happy Together", year: 1997, genre: ["剧情", "爱情"], duration: 96, rating: 8.0, cast: ["张国荣", "梁朝伟"], awards: ["戛纳最佳导演"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "mood", title: "花样年华", titleEn: "In the Mood for Love", year: 2000, genre: ["剧情", "爱情"], duration: 98, rating: 8.1, cast: ["梁朝伟", "张曼玉"], awards: ["金像奖最佳影片", "金马奖最佳影片"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "ipman", title: "一代宗师", titleEn: "The Grandmaster", year: 2013, genre: ["动作", "传记"], duration: 130, rating: 7.8, cast: ["梁朝伟", "章子怡", "张晋"], awards: ["金像奖最佳影片", "金马奖最佳影片"], streaming: ["Netflix", "Amazon Prime"] }
        ]
    },
    {
        id: "ang",
        name: "李安",
        nameEn: "Ang Lee",
        country: "中国台湾",
        countryFlag: "TW",
        birth: 1954,
        death: null,
        movement: "华语艺术电影",
        style: "跨文化导演，在东西方题材间自如切换，以细腻的情感表达著称。",
        awards: ["奥斯卡最佳导演x2", "威尼斯金狮x2", "金球奖"],
        films: [
            { id: "crouching", title: "卧虎藏龙", titleEn: "Crouching Tiger, Hidden Dragon", year: 2000, genre: ["动作", "武侠"], duration: 120, rating: 7.9, cast: ["周润发", "杨紫琼", "章子怡"], awards: ["奥斯卡最佳外语片", "奥斯卡最佳摄影"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "brokeback", title: "断背山", titleEn: "Brokeback Mountain", year: 2005, genre: ["剧情", "爱情"], duration: 134, rating: 8.0, cast: ["希斯-莱杰", "杰克-吉伦哈尔"], awards: ["奥斯卡最佳导演", "奥斯卡最佳改编剧本"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "life", title: "饮食男女", titleEn: "Eat Drink Man Woman", year: 1994, genre: ["剧情", "家庭"], duration: 124, rating: 8.0, cast: ["郎雄", "吴倩莲"], awards: ["金球奖最佳外语片"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "sense", title: "理智与情感", titleEn: "Sense and Sensibility", year: 1995, genre: ["剧情", "爱情"], duration: 136, rating: 7.7, cast: ["艾玛-汤普森", "凯特-温斯莱特"], awards: ["奥斯卡最佳改编剧本", "奥斯卡最佳女主角"], streaming: ["Netflix"] },
            { id: "tiger", title: "少年派的奇幻漂流", titleEn: "Life of Pi", year: 2012, genre: ["冒险", "奇幻"], duration: 127, rating: 8.6, cast: ["苏拉-沙玛", "伊尔凡-可汗"], awards: ["奥斯卡最佳导演", "奥斯卡最佳视觉效果"], streaming: ["Netflix", "Amazon Prime"] }
        ]
    },
    {
        id: "zhang",
        name: "张艺谋",
        nameEn: "Zhang Yimou",
        country: "中国",
        countryFlag: "CN",
        birth: 1951,
        death: null,
        movement: "中国第五代导演",
        style: "视觉大师，以极致的色彩运用、宏大的历史叙事著称。",
        awards: ["威尼斯金狮", "金球奖", "奥斯卡提名"],
        films: [
            { id: "red", title: "红高粱", titleEn: "Red Sorghum", year: 1987, genre: ["剧情", "爱情"], duration: 91, rating: 7.5, cast: ["巩俐", "姜文"], awards: ["柏林金熊奖"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "raise", title: "活着", titleEn: "To Live", year: 1994, genre: ["剧情"], duration: 132, rating: 9.3, cast: ["葛优", "巩俐"], awards: ["戛纳大奖"], streaming: ["Netflix"] },
            { id: "hero", title: "英雄", titleEn: "Hero", year: 2002, genre: ["动作", "武侠"], duration: 107, rating: 7.0, cast: ["李连杰", "梁朝伟", "张曼玉", "章子怡"], awards: ["奥斯卡最佳外语片提名"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "house", title: "大红灯笼高高挂", titleEn: "Raise the Red Lantern", year: 1991, genre: ["剧情"], duration: 125, rating: 8.1, cast: ["巩俐", "马精武"], awards: ["威尼斯银狮"], streaming: ["Netflix", "Amazon Prime"] }
        ]
    },
    {
        id: "chen",
        name: "陈凯歌",
        nameEn: "Chen Kaige",
        country: "中国",
        countryFlag: "CN",
        birth: 1952,
        death: null,
        movement: "中国第五代导演",
        style: "中国第五代核心人物，以诗意的影像、对历史的反思著称。",
        awards: ["奥斯卡最佳外语片", "戛纳金棕榈提名"],
        films: [
            { id: "king", title: "霸王别姬", titleEn: "Farewell My Concubine", year: 1993, genre: ["剧情", "历史"], duration: 171, rating: 9.6, cast: ["张国荣", "张丰毅", "巩俐"], awards: ["奥斯卡最佳外语片", "戛纳金棕榈提名"], streaming: ["Netflix", "Amazon Prime"] }
        ]
    },
    {
        id: "bergman",
        name: "英格玛-伯格曼",
        nameEn: "Ingmar Bergman",
        country: "瑞典",
        countryFlag: "SE",
        birth: 1918,
        death: 2007,
        movement: "艺术电影",
        style: "电影哲学家，以对存在、死亡、宗教的深刻探讨著称。",
        awards: ["奥斯卡终身成就奖", "戛纳金棕榈x3", "威尼斯金狮x2"],
        films: [
            { id: "seventh", title: "第七封印", titleEn: "The Seventh Seal", year: 1957, genre: ["剧情", "奇幻"], duration: 96, rating: 8.4, cast: ["马克斯-冯-西多", "古内尔-林德布罗姆"], awards: [], streaming: ["Criterion Channel", "Amazon Prime"] },
            { id: "wild", title: "野草莓", titleEn: "Wild Strawberries", year: 1957, genre: ["剧情"], duration: 91, rating: 8.1, cast: ["维克多-舍斯特伦", "比约恩-埃里克松"], awards: ["威尼斯金狮奖"], streaming: ["Criterion Channel", "Amazon Prime"] },
            { id: "persona", title: "假面", titleEn: "Persona", year: 1966, genre: ["剧情", "惊悚"], duration: 83, rating: 8.1, cast: ["比约恩-埃里克松", "丽芙-乌曼"], awards: [], streaming: ["Criterion Channel", "Amazon Prime"] },
            { id: "autumn", title: "秋天奏鸣曲", titleEn: "Autumn Sonata", year: 1978, genre: ["剧情"], duration: 92, rating: 8.0, cast: ["英格丽-褒曼", "丽芙-乌曼"], awards: ["奥斯卡最佳女主角提名"], streaming: ["Criterion Channel"] },
            { id: "hour", title: "芬妮与亚历山大", titleEn: "Fanny and Alexander", year: 1982, genre: ["剧情"], duration: 188, rating: 8.1, cast: ["玛丽-理查德森"], awards: ["奥斯卡最佳外语片"], streaming: ["Criterion Channel"] }
        ]
    },
    {
        id: "fellini",
        name: "费德里科-费里尼",
        nameEn: "Federico Fellini",
        country: "意大利",
        countryFlag: "IT",
        birth: 1920,
        death: 1993,
        movement: "意大利电影",
        style: "电影诗人，以马戏团、梦与现实的交织、对记忆的探索著称。",
        awards: ["奥斯卡终身成就奖", "戛纳金棕榈x2", "威尼斯金狮x2"],
        films: [
            { id: "lavita", title: "甜蜜生活", titleEn: "La Dolce Vita", year: 1960, genre: ["剧情"], duration: 174, rating: 8.0, cast: ["马塞洛-马斯楚安尼", "安妮塔-艾克伯格"], awards: ["戛纳金棕榈奖"], streaming: ["Criterion Channel", "Amazon Prime"] },
            { id: "8half", title: "八部半", titleEn: "8", year: 1963, genre: ["剧情"], duration: 138, rating: 8.1, cast: ["马塞洛-马斯楚安尼", "阿努克-艾梅"], awards: ["奥斯卡最佳外语片", "奥斯卡最佳艺术指导"], streaming: ["Criterion Channel", "Amazon Prime"] },
            { id: "amatriciana", title: "卡比里亚之夜", titleEn: "Nights of Cabiria", year: 1957, genre: ["剧情"], duration: 110, rating: 8.1, cast: ["朱莉埃塔-马西纳"], awards: ["奥斯卡最佳外语片"], streaming: ["Criterion Channel"] }
        ]
    },
    {
        id: "godard",
        name: "让-吕克-戈达尔",
        nameEn: "Jean-Luc Godard",
        country: "法国",
        countryFlag: "FR",
        birth: 1930,
        death: 2022,
        movement: "法国新浪潮",
        style: "新浪潮教父，以打破传统叙事、跳接剪辑著称。",
        awards: ["奥斯卡终身成就奖", "威尼斯金狮x2", "戛纳金棕榈"],
        films: [
            { id: "breathless", title: "筋疲力尽", titleEn: "Breathless", year: 1960, genre: ["犯罪", "剧情"], duration: 90, rating: 7.8, cast: ["让-保罗-贝尔蒙多", "珍-茜宝"], awards: [], streaming: ["Criterion Channel", "Amazon Prime"] },
            { id: "contempt", title: "蔑视", titleEn: "Contempt", year: 1963, genre: ["剧情", "爱情"], duration: 102, rating: 7.7, cast: ["碧姬-芭铎", "米歇尔-皮科利"], awards: ["金球奖最佳外语片"], streaming: ["Criterion Channel", "Amazon Prime"] }
        ]
    },
    {
        id: "truffaut",
        name: "弗朗索瓦-特吕弗",
        nameEn: "Francois Truffaut",
        country: "法国",
        countryFlag: "FR",
        birth: 1932,
        death: 1984,
        movement: "法国新浪潮",
        style: "新浪潮核心人物，以自传式叙事、对童年的怀旧著称。",
        awards: ["奥斯卡最佳外语片x2", "戛纳最佳导演", "威尼斯银狮"],
        films: [
            { id: "400blows", title: "四百击", titleEn: "The 400 Blows", year: 1959, genre: ["剧情"], duration: 99, rating: 8.1, cast: ["让-皮埃尔-莱奥"], awards: ["戛纳最佳导演"], streaming: ["Criterion Channel", "Amazon Prime"] },
            { id: "dayfornight", title: "日以作夜", titleEn: "Day for Night", year: 1973, genre: ["剧情"], duration: 115, rating: 8.0, cast: ["弗朗索瓦-特吕弗", "杰奎琳-比塞特"], awards: ["奥斯卡最佳外语片", "奥斯卡最佳女配角"], streaming: ["Criterion Channel"] }
        ]
    },
    {
        id: " PTA",
        name: "保罗-托马斯-安德森",
        nameEn: "Paul Thomas Anderson",
        country: "美国",
        countryFlag: "US",
        birth: 1970,
        death: null,
        movement: "当代大师",
        style: "当代最具作者性的导演之一，以复杂的叙事和对角色的深刻刻画著称。",
        awards: ["戛纳最佳导演", "金球奖", "BAFTA"],
        films: [
            { id: "there", title: "血色将至", titleEn: "There Will Be Blood", year: 2007, genre: ["剧情"], duration: 158, rating: 8.0, cast: ["丹尼尔-戴-刘易斯", "保罗-达诺"], awards: ["奥斯卡最佳男主角", "BAFTA最佳男主角"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "magnolia", title: "木兰花", titleEn: "Magnolia", year: 1999, genre: ["剧情"], duration: 188, rating: 8.0, cast: ["汤姆-克鲁斯", "菲利普-塞默-霍夫曼", "朱莉安-摩尔"], awards: ["金球奖最佳男主角"], streaming: ["Amazon Prime"] },
            { id: "boogie", title: "不羁夜", titleEn: "Boogie Nights", year: 1997, genre: ["剧情"], duration: 145, rating: 7.5, cast: ["马克-沃尔伯格", "朱莉安-摩尔"], awards: [], streaming: ["Amazon Prime"] },
            { id: "sicario", title: "边境杀手", titleEn: "Sicario", year: 2015, genre: ["动作", "剧情"], duration: 121, rating: 7.6, cast: ["艾米莉-布朗特", "本尼西奥-德尔-托罗", "乔什-布洛林"], awards: [], streaming: ["Netflix", "Amazon Prime"] }
        ]
    },
    {
        id: "coen",
        name: "科恩兄弟",
        nameEn: "Coen Brothers",
        country: "美国",
        countryFlag: "US",
        birth: 1954,
        death: null,
        movement: "当代大师",
        style: "兄弟搭档，以独特的黑色幽默、类型片解构著称。",
        awards: ["奥斯卡最佳影片", "奥斯卡最佳导演", "戛纳最佳导演"],
        films: [
            { id: "fargo", title: "冰血暴", titleEn: "Fargo", year: 1996, genre: ["犯罪", "剧情"], duration: 98, rating: 8.1, cast: ["弗朗西斯-麦克多蒙德", "William H. Macy"], awards: ["奥斯卡最佳女主角", "奥斯卡最佳原创剧本"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "big", title: "谋杀绿脚趾", titleEn: "The Big Lebowski", year: 1998, genre: ["犯罪", "喜剧"], duration: 117, rating: 8.1, cast: ["杰夫-布里吉斯", "约翰-古德曼"], awards: [], streaming: ["Netflix", "Amazon Prime"] },
            { id: "no", title: "老无所依", titleEn: "No Country for Old Men", year: 2007, genre: ["犯罪", "惊悚"], duration: 122, rating: 8.2, cast: ["汤米-李-琼斯", "哈维尔-巴登"], awards: ["奥斯卡最佳影片", "奥斯卡最佳导演", "奥斯卡最佳男配角"], streaming: ["Netflix", "Amazon Prime"] }
        ]
    },
    {
        id: "wes",
        name: "韦斯-安德森",
        nameEn: "Wes Anderson",
        country: "美国",
        countryFlag: "US",
        birth: 1969,
        death: null,
        movement: "当代大师",
        style: "对称美学大师，以精确的构图、鲜艳的色彩和独特的叙事节奏著称。",
        awards: ["奥斯卡最佳艺术指导", "金熊奖"],
        films: [
            { id: "grand", title: "布达佩斯大饭店", titleEn: "The Grand Budapest Hotel", year: 2014, genre: ["剧情", "喜剧"], duration: 99, rating: 8.1, cast: ["拉尔夫-费因斯", "托比-马瑟尔", "F. Murray Abraham"], awards: ["奥斯卡最佳艺术指导", "奥斯卡最佳服装设计", "奥斯卡最佳化妆"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "moonrise", title: "月升王国", titleEn: "Moonrise Kingdom", year: 2012, genre: ["剧情", "喜剧"], duration: 94, rating: 7.8, cast: ["布鲁斯-威利斯", "比尔-穆瑞"], awards: [], streaming: ["Netflix", "Amazon Prime"] },
            { id: "rushmore", title: "青春年少", titleEn: "Rushmore", year: 1998, genre: ["剧情", "喜剧"], duration: 93, rating: 7.7, cast: ["杰森-舒曼", "比尔-穆瑞"], awards: [], streaming: ["Netflix", "Amazon Prime"] },
            { id: "fantastic", title: "了不起的狐狸爸爸", titleEn: "Fantastic Mr. Fox", year: 2009, genre: ["动画", "喜剧"], duration: 87, rating: 7.8, cast: ["乔治-克鲁尼", "梅丽尔-斯特里普"], awards: ["奥斯卡最佳动画提名"], streaming: ["Netflix", "Amazon Prime"] }
        ]
    },
    {
        id: "cuaron",
        name: "阿方索-卡隆",
        nameEn: "Alfonso Cuaron",
        country: "墨西哥",
        countryFlag: "MX",
        birth: 1961,
        death: null,
        movement: "墨西哥电影新浪潮",
        style: "技术大师，以震撼的视觉效果、缓慢的长镜头著称。",
        awards: ["奥斯卡最佳导演x2", "奥斯卡最佳外语片", "金球奖"],
        films: [
            { id: "gravity", title: "地心引力", titleEn: "Gravity", year: 2013, genre: ["科幻", "惊悚"], duration: 91, rating: 7.7, cast: ["桑德拉-布洛克", "乔治-克鲁尼"], awards: ["奥斯卡最佳导演", "奥斯卡最佳视觉效果", "奥斯卡最佳剪辑"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "roma", title: "罗马", titleEn: "Roma", year: 2018, genre: ["剧情"], duration: 135, rating: 7.7, cast: ["伊尔维拉-内格莱特", "雅利扎-阿巴里西奥"], awards: ["奥斯卡最佳导演", "奥斯卡最佳外语片", "奥斯卡最佳摄影"], streaming: ["Netflix"] },
            { id: "y", title: "你妈妈也一样", titleEn: "Y Tu Mama Tambien", year: 2001, genre: ["剧情", "爱情"], duration: 106, rating: 7.6, cast: ["盖尔-加西亚-贝纳尔", "迭戈-卢纳"], awards: [], streaming: ["Amazon Prime"] }
        ]
    },
    {
        id: "del",
        name: "亚历杭德罗-冈萨雷斯-伊尼亚里图",
        nameEn: "Alejandro Gonzalez Inarritu",
        country: "墨西哥",
        countryFlag: "MX",
        birth: 1963,
        death: null,
        movement: "墨西哥电影新浪潮",
        style: "情感冲击大师，以交织的叙事结构、强烈的情感冲击著称。",
        awards: ["奥斯卡最佳导演x2", "奥斯卡最佳影片x2", "戛纳最佳导演"],
        films: [
            { id: "birdman", title: "鸟人", titleEn: "Birdman", year: 2014, genre: ["剧情"], duration: 119, rating: 7.7, cast: ["迈克尔-基顿", "艾玛-斯通"], awards: ["奥斯卡最佳影片", "奥斯卡最佳导演", "奥斯卡最佳摄影", "奥斯卡最佳男主角"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "revenant", title: "荒野猎人", titleEn: "The Revenant", year: 2015, genre: ["剧情", "冒险"], duration: 156, rating: 8.0, cast: ["莱昂纳多-迪卡普里奥", "汤姆-哈迪"], awards: ["奥斯卡最佳导演", "奥斯卡最佳男主角", "奥斯卡最佳摄影"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "babel", title: "巴别塔", titleEn: "Babel", year: 2006, genre: ["剧情"], duration: 143, rating: 7.4, cast: ["布拉德-皮特", "凯特-布兰切特", "菊地凛子"], awards: ["金球奖最佳剧情片"], streaming: ["Amazon Prime"] }
        ]
    },
    {
        id: "gondry",
        name: "米歇尔-贡德里",
        nameEn: "Michel Gondry",
        country: "法国",
        countryFlag: "FR",
        birth: 1963,
        death: null,
        movement: "当代艺术电影",
        style: "创意大师，以独特的视觉风格、打破常规的叙事方式著称。",
        awards: ["戛纳评审团大奖", "BAFTA"],
        films: [
            { id: "eternal", title: "暖暖内含光", titleEn: "Eternal Sunshine of the Spotless Mind", year: 2004, genre: ["剧情", "爱情", "科幻"], duration: 108, rating: 8.1, cast: ["金-凯瑞", "凯特-温斯莱特"], awards: ["奥斯卡最佳原创剧本"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "science", title: "科学睡眠", titleEn: "The Science of Sleep", year: 2006, genre: ["剧情", "喜剧", "爱情"], duration: 105, rating: 7.3, cast: ["吉约姆-卡内", "娜塔莉-波特曼"], awards: [], streaming: ["Netflix", "Amazon Prime"] },
            { id: "human", title: "人类之子", titleEn: "Children of Men", year: 2006, genre: ["动作", "剧情", "惊悚"], duration: 129, rating: 7.5, cast: ["克里夫-欧文", "朱丽叶-比诺什"], awards: [], streaming: ["Amazon Prime"] }
        ]
    },
    {
        id: "kaufman",
        name: "查理-考夫曼",
        nameEn: "Charlie Kaufman",
        country: "美国",
        countryFlag: "US",
        birth: 1958,
        death: null,
        movement: "当代大师",
        style: "元叙事大师，以对身份、记忆、创作的焦虑探讨著称。",
        awards: ["奥斯卡最佳原创剧本", "BAFTA"],
        films: [
            { id: "adaptation", title: "改编剧本", titleEn: "Adaptation", year: 2002, genre: ["剧情", "喜剧"], duration: 114, rating: 7.9, cast: ["尼古拉斯-凯奇", "梅丽尔-斯特里普"], awards: ["奥斯卡最佳原创剧本提名", "BAFTA最佳改编剧本"], streaming: ["Amazon Prime"] },
            { id: "confessions", title: "纽约提喻法", titleEn: "Synecdoche, New York", year: 2008, genre: ["剧情"], duration: 124, rating: 7.5, cast: ["菲利普-塞默-霍夫曼"], awards: [], streaming: ["Netflix", "Amazon Prime"] },
            { id: "being", title: "失常", titleEn: "Being John Malkovich", year: 1999, genre: ["剧情", "喜剧", "奇幻"], duration: 112, rating: 7.7, cast: ["约翰-马尔科维奇", "卡梅隆-迪亚茨"], awards: ["奥斯卡最佳原创剧本提名"], streaming: ["Netflix", "Amazon Prime"] }
        ]
    },
    {
        id: "park",
        name: "朴赞郁",
        nameEn: "Park Chan-wook",
        country: "韩国",
        countryFlag: "KR",
        birth: 1963,
        death: null,
        movement: "韩国电影崛起",
        style: "复仇三部曲导演，以极致的视觉风格、对类型片的改造著称。",
        awards: ["戛纳评审团大奖", "戛纳最佳导演", "奥斯卡提名"],
        films: [
            { id: "oldboy", title: "老男孩", titleEn: "Oldboy", year: 2003, genre: ["动作", "悬疑", "惊悚"], duration: 120, rating: 8.4, cast: ["崔岷植", "刘智泰", "姜惠贞"], awards: ["戛纳评审团大奖"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "handmaiden", title: "小姐", titleEn: "The Handmaiden", year: 2016, genre: ["剧情", "悬疑"], duration: 145, rating: 8.1, cast: ["金敏喜", "河正宇", "赵震雄"], awards: [], streaming: ["Netflix", "Amazon Prime"] },
            { id: "dec", title: "分手的决心", titleEn: "Decision to Leave", year: 2022, genre: ["剧情", "爱情", "悬疑"], duration: 138, rating: 7.4, cast: ["汤唯", "朴海日"], awards: ["戛纳最佳导演"], streaming: ["Netflix", "Amazon Prime"] }
        ]
    },
    {
        id: "lee",
        name: "李沧东",
        nameEn: "Lee Chang-dong",
        country: "韩国",
        countryFlag: "KR",
        birth: 1954,
        death: null,
        movement: "韩国艺术电影",
        style: "韩国文学导演，以对韩国社会现实的深刻探讨著称。",
        awards: ["戛纳金棕榈提名", "威尼斯金狮", "金球奖最佳外语片"],
        films: [
            { id: "paradise", title: "燃烧", titleEn: "Burning", year: 2018, genre: ["剧情", "悬疑"], duration: 148, rating: 7.9, cast: ["刘亚仁", "史蒂文-元", "全钟瑞"], awards: ["戛纳评审团大奖"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "green", title: "绿洲", titleEn: "Oasis", year: 2002, genre: ["剧情", "爱情"], duration: 132, rating: 8.0, cast: ["薛景求", "文素利"], awards: ["威尼斯银狮", "戛纳一种关注大奖"], streaming: ["Amazon Prime"] },
            { id: "poetry", title: "诗", titleEn: "Poetry", year: 2010, genre: ["剧情"], duration: 111, rating: 7.8, cast: ["金惠子", "余笃贤"], awards: ["戛纳最佳编剧", "金球奖最佳外语片提名"], streaming: ["Amazon Prime"] }
        ]
    },
    {
        id: "kimki",
        name: "金基德",
        nameEn: "Kim Ki-duk",
        country: "韩国",
        countryFlag: "KR",
        birth: 1960,
        death: 2020,
        movement: "韩国艺术电影",
        style: "争议性导演，以极端题材、身体暴力和极简主义叙事著称。",
        awards: ["威尼斯银狮", "柏林银熊", "威尼斯金狮提名"],
        films: [
            { id: "spring", title: "春夏秋冬又一春", titleEn: "Spring, Summer, Fall, Winter... and Spring", year: 2003, genre: ["剧情"], duration: 103, rating: 8.0, cast: ["金基德"], awards: [], streaming: ["Netflix", "Amazon Prime"] },
            { id: "3-iron", title: "空房间", titleEn: "3-Iron", year: 2004, genre: ["剧情", "爱情"], duration: 94, rating: 7.6, cast: ["李丞涓", "在熙"], awards: ["威尼斯银狮最佳导演"], streaming: ["Amazon Prime"] },
            { id: "pieta", title: "圣疡", titleEn: "Pieta", year: 2012, genre: ["剧情"], duration: 104, rating: 7.3, cast: ["Lee Jung-keun"], awards: ["威尼斯金狮"], streaming: ["Amazon Prime"] }
        ]
    },
    {
        id: "hayao",
        name: "今敏",
        nameEn: "Satoshi Kon",
        country: "日本",
        countryFlag: "JP",
        birth: 1963,
        death: 2010,
        movement: "日本动画",
        style: "动画大师，以梦境与现实的交织、复杂的叙事结构著称。",
        awards: ["东京国际电影节大奖"],
        films: [
            { id: "paprika", title: "红辣椒", titleEn: "Paprika", year: 2006, genre: ["动画", "科幻", "悬疑"], duration: 90, rating: 8.0, cast: ["林原惠美", "古谷彻"], awards: ["安妮奖最佳动画提名"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "perfect", title: "千年女优", titleEn: "Millennium Actress", year: 2001, genre: ["动画", "剧情"], duration: 87, rating: 8.2, cast: ["小林靖子", "津田英三"], awards: [], streaming: ["Netflix", "Amazon Prime"] },
            { id: "tokyo", title: "东京教父", titleEn: "Tokyo Godfathers", year: 2003, genre: ["动画", "剧情"], duration: 92, rating: 8.0, cast: ["江守彻", "梅津秀行"], awards: [], streaming: ["Netflix", "Amazon Prime"] },
            { id: "paranoia", title: "未麻的部屋", titleEn: "Perfect Blue", year: 1997, genre: ["动画", "悬疑", "惊悚"], duration: 81, rating: 7.9, cast: ["岩男润子", "松本保典"], awards: [], streaming: ["Netflix", "Amazon Prime"] }
        ]
    },
    {
        id: "mamoru",
        name: "押井守",
        nameEn: "Mamoru Oshii",
        country: "日本",
        countryFlag: "JP",
        birth: 1951,
        death: null,
        movement: "日本动画",
        style: "动画哲学家，以深刻的哲学主题、电影化的镜头语言著称。",
        awards: ["威尼斯金狮提名", "安妮奖"],
        films: [
            { id: "ghost", title: "攻壳机动队", titleEn: "Ghost in the Shell", year: 1995, genre: ["动画", "科幻", "动作"], duration: 83, rating: 8.0, cast: ["田中敦子", "大塚明夫"], awards: ["安妮奖最佳动画视觉效果"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "innocence", title: "攻壳机动队2：无罪", titleEn: "Innocence", year: 2004, genre: ["动画", "科幻"], duration: 100, rating: 7.6, cast: ["大塚明夫", "田中敦子"], awards: ["金球奖最佳外语片提名"], streaming: ["Netflix", "Amazon Prime"] }
        ]
    },
    {
        id: "lynch",
        name: "大卫-林奇",
        nameEn: "David Lynch",
        country: "美国",
        countryFlag: "US",
        birth: 1946,
        death: 2025,
        movement: "超现实主义",
        style: "超现实主义电影大师，以梦境般的叙事、诡异的氛围著称。",
        awards: ["戛纳最佳导演", "威尼斯金狮奖", "凯撒荣誉奖"],
        films: [
            { id: "mulholland", title: "穆赫兰道", titleEn: "Mulholland Drive", year: 2001, genre: ["悬疑", "剧情"], duration: 147, rating: 7.9, cast: ["娜奥米-沃茨", "劳拉-哈灵"], awards: ["戛纳最佳导演"], streaming: ["Amazon Prime"] },
            { id: "bluevelvet", title: "蓝丝绒", titleEn: "Blue Velvet", year: 1986, genre: ["悬疑", "惊悚"], duration: 120, rating: 7.7, cast: ["凯尔-麦克拉克伦", "伊莎贝拉-罗西里尼", "丹尼斯-霍珀"], awards: [], streaming: ["Amazon Prime"] },
            { id: "eraserhead", title: "橡皮头", titleEn: "Eraserhead", year: 1977, genre: ["恐怖", "奇幻"], duration: 89, rating: 7.3, cast: ["杰克-南斯"], awards: [], streaming: ["Amazon Prime"] }
        ]
    },
    {
        id: "allen",
        name: "伍迪-艾伦",
        nameEn: "Woody Allen",
        country: "美国",
        countryFlag: "US",
        birth: 1935,
        death: 2025,
        movement: "当代大师",
        style: "以话痨式对白、知识分子气质、自传式叙事著称。",
        awards: ["奥斯卡最佳原创剧本x4", "金球奖最佳导演", "威尼斯金狮奖"],
        films: [
            { id: "anniehall", title: "安妮-霍尔", titleEn: "Annie Hall", year: 1977, genre: ["喜剧", "爱情"], duration: 93, rating: 8.0, cast: ["伍迪-艾伦", "黛安-基顿"], awards: ["奥斯卡最佳影片", "奥斯卡最佳导演"], streaming: ["Amazon Prime"] },
            { id: "manhattan", title: "曼哈顿", titleEn: "Manhattan", year: 1979, genre: ["喜剧", "爱情"], duration: 96, rating: 7.9, cast: ["伍迪-艾伦", "黛安-基顿", "玛瑞儿-海明威"], awards: ["奥斯卡最佳女配角"], streaming: ["Amazon Prime"] },
            { id: "midnight", title: "午夜巴黎", titleEn: "Midnight in Paris", year: 2011, genre: ["喜剧", "爱情"], duration: 94, rating: 7.7, cast: ["欧文-威尔逊", "瑞秋-麦克亚当斯"], awards: ["奥斯卡最佳原创剧本"], streaming: ["Netflix"] }
        ]
    },
    {
        id: "refn",
        name: "拉斯-冯-提尔",
        nameEn: "Lars von Trier",
        country: "丹麦",
        countryFlag: "DK",
        birth: 1956,
        death: null,
        movement: "道格玛95",
        style: "丹麦坏小子，以挑衅观众、极端题材和电影技术实验著称。",
        awards: ["戛纳金棕榈", "戛纳评审团大奖", "威尼斯金狮"],
        films: [
            { id: "dance", title: "黑暗中的舞者", titleEn: "Dancer in the Dark", year: 2000, genre: ["剧情", "音乐"], duration: 140, rating: 7.9, cast: ["比约克"], awards: ["戛纳金棕榈奖"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "dogville", title: "狗镇", titleEn: "Dogville", year: 2003, genre: ["剧情"], duration: 178, rating: 8.0, cast: ["妮可-基德曼", "劳拉-邓恩"], awards: ["戛纳评审团大奖"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "melancholia", title: "忧郁症", titleEn: "Melancholia", year: 2011, genre: ["剧情", "科幻"], duration: 136, rating: 7.1, cast: ["克斯汀-邓斯特", "夏洛特-甘斯布"], awards: [], streaming: ["Netflix"] },
            { id: "antichrist", title: "反基督者", titleEn: "Antichrist", year: 2009, genre: ["剧情", "恐怖"], duration: 108, rating: 6.8, cast: ["威廉-达福", "夏洛特-甘斯布"], awards: ["戛纳一种关注大奖"], streaming: ["Amazon Prime"] }
        ]
    },
    {
        id: "dieb",
        name: "尼古拉斯-温丁-雷弗恩",
        nameEn: "Nicolas Winding Refn",
        country: "丹麦",
        countryFlag: "DK",
        birth: 1970,
        death: null,
        movement: "北欧黑色电影",
        style: "视觉极端主义者，以强烈的霓虹色彩、缓慢的节奏著称。",
        awards: ["戛纳最佳导演", "戛纳一种关注大奖"],
        films: [
            { id: "drive", title: "亡命驾驶", titleEn: "Drive", year: 2011, genre: ["动作", "剧情"], duration: 100, rating: 7.8, cast: ["瑞恩-高斯林", "凯瑞-穆里根"], awards: ["戛纳最佳导演"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "bronson", title: "布朗森", titleEn: "Bronson", year: 2008, genre: ["传记", "剧情"], duration: 92, rating: 7.0, cast: ["汤姆-哈迪"], awards: [], streaming: ["Amazon Prime"] },
            { id: "valhalla", title: "末路狂奔", titleEn: "Pusher", year: 1996, genre: ["犯罪", "惊悚"], duration: 110, rating: 7.2, cast: ["金-博恩", "麦斯-冯-西度"], awards: [], streaming: ["Amazon Prime"] }
        ]
    },
    {
        id: "almodovar",
        name: "佩德罗-阿莫多瓦",
        nameEn: "Pedro Almodovar",
        country: "西班牙",
        countryFlag: "ES",
        birth: 1949,
        death: null,
        movement: "西班牙电影",
        style: "西班牙电影色彩大师，以鲜明的色彩、复杂的女性角色著称。",
        awards: ["奥斯卡最佳外语片x2", "戛纳最佳导演", "金球奖"],
        films: [
            { id: "talk", title: "关于我母亲的一切", titleEn: "All About My Mother", year: 1999, genre: ["剧情", "喜剧"], duration: 101, rating: 7.5, cast: ["Cecilia Roth", "Penelope Cruz"], awards: ["奥斯卡最佳外语片", "金球奖最佳外语片"], streaming: ["Amazon Prime"] },
            { id: "women", title: "崩溃边缘的女人", titleEn: "Women on the Verge of a Nervous Breakdown", year: 1988, genre: ["剧情", "喜剧"], duration: 88, rating: 7.4, cast: ["Carmen Maura"], awards: ["戛纳最佳导演"], streaming: ["Criterion Channel"] },
            { id: "pain", title: "痛苦与荣耀", titleEn: "Pain and Glory", year: 2019, genre: ["剧情"], duration: 113, rating: 7.5, cast: ["Antonio Banderas"], awards: ["戛纳最佳男主角"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "volver", title: "回归", titleEn: "Volver", year: 2006, genre: ["剧情", "喜剧"], duration: 121, rating: 7.6, cast: ["Penelope Cruz", "Carmen Maura"], awards: ["戛纳最佳剧本"], streaming: ["Netflix", "Amazon Prime"] }
        ]
    },
    {
        id: "kieslowski",
        name: "克日什托夫-基耶斯洛夫斯基",
        nameEn: "Krzysztof Kieslowski",
        country: "波兰",
        countryFlag: "PL",
        birth: 1941,
        death: 1996,
        movement: "道德焦虑电影",
        style: "道德电影大师，以对偶然、命运和道德困境的探索著称。",
        awards: ["戛纳最佳导演", "威尼斯金狮", "奥斯卡提名"],
        films: [
            { id: "decalogue", title: "十诫", titleEn: "The Decalogue", year: 1988, genre: ["剧情"], duration: 572, rating: 8.8, cast: ["多位演员"], awards: [], streaming: ["Criterion Channel"] },
            { id: "doubled", title: "两生花", titleEn: "The Double Life of Veronique", year: 1991, genre: ["剧情", "奇幻"], duration: 98, rating: 7.9, cast: ["祖扎娜-沃利塔", "彼得-贾贡基维茨"], awards: ["威尼斯银狮", "奥斯卡最佳摄影提名"], streaming: ["Criterion Channel", "Amazon Prime"] },
            { id: "red", title: "红色情深", titleEn: "Three Colors: Red", year: 1994, genre: ["剧情"], duration: 91, rating: 7.8, cast: ["让-路易-特兰蒂尼昂", "艾莲娜-雅各布"], awards: [], streaming: ["Criterion Channel", "Amazon Prime"] },
            { id: "blue", title: "蓝色情挑", titleEn: "Three Colors: Blue", year: 1993, genre: ["剧情"], duration: 92, rating: 7.8, cast: ["贝亚特丽斯-达勒", "艾莲娜-雅各布"], awards: ["威尼斯金狮奖"], streaming: ["Criterion Channel", "Amazon Prime"] }
        ]
    },
    {
        id: "takeshi",
        name: "北野武",
        nameEn: "Takeshi Kitano",
        country: "日本",
        countryFlag: "JP",
        birth: 1947,
        death: null,
        movement: "当代日本",
        style: "日本暴力美学大师，以极简主义暴力、黑色幽默著称。",
        awards: ["威尼斯金狮奖x2", "戛纳最佳导演"],
        films: [
            { id: "sonatine", title: "奏鸣曲", titleEn: "Sonatine", year: 1993, genre: ["犯罪", "剧情"], duration: 94, rating: 7.9, cast: ["北野武", "渡边哲"], awards: [], streaming: ["Amazon Prime"] },
            { id: "hana", title: "花之舞者", titleEn: "Hana-bi", year: 1997, genre: ["犯罪", "剧情"], duration: 103, rating: 8.1, cast: ["北野武", "岸本加世子"], awards: ["威尼斯金狮奖"], streaming: ["Amazon Prime"] },
            { id: "brother", title: "大佬", titleEn: "Brother", year: 2000, genre: ["犯罪", "剧情"], duration: 104, rating: 7.5, cast: ["北野武", "欧玛-艾普斯"], awards: [], streaming: ["Amazon Prime"] }
        ]
    },
    {
        id: "sion",
        name: "是枝裕和",
        nameEn: "Hirokazu Kore-eda",
        country: "日本",
        countryFlag: "JP",
        birth: 1962,
        death: null,
        movement: "当代日本",
        style: "家庭剧大师，以细腻的生活流叙事、对日常的深刻观察著称。",
        awards: ["戛纳金棕榈奖", "威尼斯金狮提名"],
        films: [
            { id: "shoplifters", title: "小偷家族", titleEn: "Shoplifters", year: 2018, genre: ["剧情", "家庭"], duration: 121, rating: 8.0, cast: ["中川雅也", "安藤樱", "松冈茉优"], awards: ["戛纳金棕榈奖"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "likefather", title: "如父如子", titleEn: "Like Father, Like Son", year: 2013, genre: ["剧情", "家庭"], duration: 120, rating: 8.0, cast: ["福山雅治", "尾野真千子"], awards: ["戛纳评审团奖"], streaming: ["Amazon Prime"] },
            { id: "still", title: "步履不停", titleEn: "Still Walking", year: 2008, genre: ["剧情", "家庭"], duration: 115, rating: 8.1, cast: ["阿部宽", "夏川结衣"], awards: [], streaming: ["Amazon Prime"] }
        ]
    },
    {
        id: "ozu",
        name: "小津安二郎",
        nameEn: "Yasujiro Ozu",
        country: "日本",
        countryFlag: "JP",
        birth: 1903,
        death: 1963,
        movement: "日本电影经典",
        style: "极简主义大师，以固定机位、低角度摄影著称。",
        awards: ["威尼斯国际奖", "日本电影学院奖"],
        films: [
            { id: "tokyo", title: "东京物语", titleEn: "Tokyo Story", year: 1953, genre: ["剧情", "家庭"], duration: 136, rating: 8.9, cast: ["笠智众", "原节子"], awards: [], streaming: ["Criterion Channel", "Amazon Prime"] },
            { id: "late", title: "晚春", titleEn: "Late Spring", year: 1949, genre: ["剧情", "家庭"], duration: 108, rating: 8.3, cast: ["笠智众", "原节子"], awards: [], streaming: ["Criterion Channel"] },
            { id: "autumn", title: "秋刀鱼之味", titleEn: "An Autumn Afternoon", year: 1962, genre: ["剧情"], duration: 112, rating: 8.2, cast: ["笠智众", "岩下志麻"], awards: [], streaming: ["Criterion Channel"] }
        ]
    },
    {
        id: "takashii",
        name: "塔可夫斯基",
        nameEn: "Andrei Tarkovsky",
        country: "苏联",
        countryFlag: "RU",
        birth: 1932,
        death: 1986,
        movement: "诗电影",
        style: "诗电影大师，以长镜头、水的意象和对精神世界的探索著称。",
        awards: ["戛纳评审团特别奖", "威尼斯银狮", "费比西奖"],
        films: [
            { id: "stalker", title: "潜行者", titleEn: "Stalker", year: 1979, genre: ["科幻", "剧情"], duration: 161, rating: 8.2, cast: ["亚历山大-凯伊达诺夫斯基", "阿廖娜-米哈伊洛娃"], awards: [], streaming: ["Criterion Channel", "Amazon Prime"] },
            { id: "mirror", title: "镜子", titleEn: "The Mirror", year: 1975, genre: ["传记", "剧情"], duration: 107, rating: 8.0, cast: ["塔可夫斯基", "阿廖娜-米哈伊洛娃"], awards: [], streaming: ["Criterion Channel"] },
            { id: "solaris", title: "索拉里斯", titleEn: "Solaris", year: 1972, genre: ["科幻", "剧情"], duration: 167, rating: 8.1, cast: ["多纳塔斯-巴廖尼斯", "娜塔莉亚-邦达尔丘克"], awards: ["戛纳评审团特别奖"], streaming: ["Criterion Channel", "Amazon Prime"] },
            { id: "andrei", title: "安德烈-卢布廖夫", titleEn: "Andrei Rublev", year: 1966, genre: ["传记", "历史"], duration: 205, rating: 8.2, cast: ["Anatoly Solonitsyn"], awards: ["戛纳费比西奖"], streaming: ["Criterion Channel"] }
        ]
    },
    {
        id: "antonioni",
        name: "米开朗基罗-安东尼奥尼",
        nameEn: "Michelangelo Antonioni",
        country: "意大利",
        countryFlag: "IT",
        birth: 1912,
        death: 2007,
        movement: "现代主义",
        style: "现代主义大师，以疏离的人物、广阔的风景著称。",
        awards: ["奥斯卡最佳导演", "威尼斯金狮x3", "戛纳金棕榈"],
        films: [
            { id: "blowup", title: "放大", titleEn: "Blow-Up", year: 1966, genre: ["悬疑", "剧情"], duration: 111, rating: 7.5, cast: ["大卫-海明斯", "瓦妮莎-雷德格瑞夫"], awards: ["戛纳金棕榈奖"], streaming: ["Criterion Channel", "Amazon Prime"] },
            { id: "reddesert", title: "红色沙漠", titleEn: "Red Desert", year: 1964, genre: ["剧情"], duration: 120, rating: 7.3, cast: ["莫尼卡-维蒂"], awards: ["威尼斯金狮奖"], streaming: ["Criterion Channel"] },
            { id: "night", title: "夜", titleEn: "La Notte", year: 1961, genre: ["剧情"], duration: 122, rating: 7.5, cast: ["马塞洛-马斯楚安尼", "让娜-莫罗"], awards: ["柏林金熊奖"], streaming: ["Criterion Channel"] }
        ]
    },
    {
        id: "wei",
        name: "蔡明亮",
        nameEn: "Tsai Ming-liang",
        country: "中国台湾",
        countryFlag: "TW",
        birth: 1957,
        death: null,
        movement: "台湾新电影",
        style: "慢电影代表，以极长的镜头、对孤独的探索著称。",
        awards: ["威尼斯金狮", "戛纳评审团大奖", "金熊奖"],
        films: [
            { id: "vive", title: "Vive L'Amour", titleEn: "Vive L'Amour", year: 1994, genre: ["剧情"], duration: 118, rating: 7.3, cast: ["杨贵媚", "李康生"], awards: ["金熊奖"], streaming: ["Criterion Channel"] },
            { id: "hole", title: "洞", titleEn: "The Hole", year: 1998, genre: ["剧情"], duration: 95, rating: 7.3, cast: ["李康生"], awards: ["戛纳评审团大奖"], streaming: ["Criterion Channel"] }
        ]
    },
    {
        id: "ji",
        name: "侯孝贤",
        nameEn: "Hou Hsiao-hsien",
        country: "中国台湾",
        countryFlag: "TW",
        birth: 1947,
        death: 2024,
        movement: "台湾新电影",
        style: "台湾电影大师，以长镜头、史诗叙事著称。",
        awards: ["金马奖最佳导演x2", "戛纳最佳导演", "金熊奖"],
        films: [
            { id: "city", title: "恐怖分子", titleEn: "The Terrorizers", year: 1986, genre: ["剧情", "犯罪"], duration: 109, rating: 7.5, cast: ["缪骞人", "王孙杰"], awards: [], streaming: ["Criterion Channel"] },
            { id: "picking", title: "恋恋风尘", titleEn: "Picking", year: 1987, genre: ["剧情", "爱情"], duration: 109, rating: 7.8, cast: ["王晶文", "辛树芬"], awards: [], streaming: ["Criterion Channel"] },
            { id: "flower", title: "海上花", titleEn: "Flowers of Shanghai", year: 1998, genre: ["剧情"], duration: 125, rating: 7.1, cast: ["刘嘉玲", "梁朝伟"], awards: [], streaming: ["Criterion Channel"] }
        ]
    },
    {
        id: "herzog",
        name: "沃纳-赫尔佐格",
        nameEn: "Werner Herzog",
        country: "德国",
        countryFlag: "DE",
        birth: 1942,
        death: null,
        movement: "德国新电影",
        style: "异象大师，以极端的拍摄条件、对疯狂的探索著称。",
        awards: ["奥斯卡最佳纪录片", "戛纳最佳导演", "威尼斯金狮"],
        films: [
            { id: "fitzcarraldo", title: "菲茨卡拉多", titleEn: "Fitzcarraldo", year: 1982, genre: ["冒险", "剧情"], duration: 158, rating: 8.0, cast: ["克劳斯-金斯基"], awards: [], streaming: ["Criterion Channel", "Amazon Prime"] },
            { id: "nosferatu", title: "诺斯费拉图", titleEn: "Nosferatu", year: 1979, genre: ["恐怖"], duration: 109, rating: 7.2, cast: ["克劳斯-金斯基"], awards: [], streaming: ["Criterion Channel", "Amazon Prime"] },
            { id: "grizzly", title: "灰熊人", titleEn: "Grizzly Man", year: 2005, genre: ["纪录片", "传记"], duration: 103, rating: 7.3, cast: ["提摩西-崔德威"], awards: [], streaming: ["Amazon Prime"] }
        ]
    },
    {
        id: "wenders",
        name: "维姆-文德斯",
        nameEn: "Wim Wenders",
        country: "德国",
        countryFlag: "DE",
        birth: 1945,
        death: null,
        movement: "德国新电影",
        style: "公路诗人，以对美国的想象、孤独的旅人著称。",
        awards: ["戛纳最佳导演", "威尼斯金狮", "奥斯卡最佳纪录片"],
        films: [
            { id: "paris", title: "巴黎-德州", titleEn: "Paris, Texas", year: 1984, genre: ["剧情"], duration: 145, rating: 8.1, cast: ["哈里-戴恩", "纳斯塔西娅-金斯基"], awards: ["戛纳金棕榈奖"], streaming: ["Criterion Channel", "Amazon Prime"] },
            { id: "alice", title: "爱丽丝城市漫游记", titleEn: "Alice in the Cities", year: 1974, genre: ["剧情"], duration: 81, rating: 7.2, cast: ["鲁迪格-福格特"], awards: [], streaming: ["Criterion Channel"] }
        ]
    },
    {
        id: "buñuel",
        name: "路易斯-布努埃尔",
        nameEn: "Luis Bunuel",
        country: "西班牙",
        countryFlag: "ES",
        birth: 1900,
        death: 1983,
        movement: "超现实主义",
        style: "超现实主义电影先驱，以颠覆性的梦境叙事著称。",
        awards: ["奥斯卡最佳外语片", "戛纳大奖", "威尼斯金狮"],
        films: [
            { id: "discreet", title: "资产阶级的审慎魅力", titleEn: "The Discrete Charm of the Bourgeoisie", year: 1972, genre: ["喜剧", "剧情"], duration: 102, rating: 7.7, cast: ["Fernando-莱昂", "Sonia-Sami"], awards: ["奥斯卡最佳外语片", "戛纳大奖"], streaming: ["Criterion Channel", "Amazon Prime"] },
            { id: "viridiana", title: "维莉蒂安娜", titleEn: "Viridiana", year: 1961, genre: ["剧情"], duration: 90, rating: 7.3, cast: ["Silvia-Pinal"], awards: ["戛纳金棕榈提名"], streaming: ["Criterion Channel"] }
        ]
    },
    {
        id: "rossellini",
        name: "罗伯托-罗西里尼",
        nameEn: "Roberto Rossellini",
        country: "意大利",
        countryFlag: "IT",
        birth: 1906,
        death: 1977,
        movement: "意大利新现实主义",
        style: "新现实主义先驱，以实景拍摄、对战后意大利的真实反映著称。",
        awards: ["威尼斯金狮x2", "奥斯卡最佳外语片"],
        films: [
            { id: "romeo", title: "罗马-不设防的城市", titleEn: "Rome, Open City", year: 1945, genre: ["剧情", "战争"], duration: 103, rating: 7.4, cast: ["安娜-玛格纳尼", "阿尔多-法布里齐"], awards: [], streaming: ["Criterion Channel"] },
            { id: "paisan", title: "战火", titleEn: "Paisan", year: 1946, genre: ["剧情", "战争"], duration: 120, rating: 7.3, cast: ["非职业演员"], awards: ["威尼斯银狮"], streaming: ["Criterion Channel"] }
        ]
    },
    {
        id: "visconti",
        name: "卢奇诺-维斯康蒂",
        nameEn: "Luchino Visconti",
        country: "意大利",
        countryFlag: "IT",
        birth: 1906,
        death: 1976,
        movement: "意大利新现实主义",
        style: "贵族导演，以对阶级、权力和衰败的深刻描写著称。",
        awards: ["戛纳大奖", "威尼斯金狮", "奥斯卡提名"],
        films: [
            { id: "rocco", title: "洛克兄弟", titleEn: "Rocco and His Brothers", year: 1960, genre: ["剧情"], duration: 180, rating: 7.9, cast: ["阿兰-德龙", "安妮塔-艾克伯格"], awards: [], streaming: ["Criterion Channel"] },
            { id: "gatto", title: "豹", titleEn: "The Leopard", year: 1963, genre: ["剧情", "历史"], duration: 185, rating: 8.0, cast: ["伯特-兰卡斯特", "克劳迪娅-卡汀娜"], awards: ["戛纳金棕榈奖"], streaming: ["Criterion Channel", "Amazon Prime"] }
        ]
    },
    {
        id: "saura",
        name: "卡洛斯-绍拉",
        nameEn: "Carlos Saura",
        country: "西班牙",
        countryFlag: "ES",
        birth: 1932,
        death: 2023,
        movement: "西班牙电影",
        style: "西班牙电影大师，以弗拉门戈元素著称。",
        awards: ["戛纳大奖", "奥斯卡提名"],
        films: [
            { id: "carmen", title: "卡门", titleEn: "Carmen", year: 1983, genre: ["剧情", "音乐"], duration: 104, rating: 7.2, cast: ["Carmen-Romero", "Antonio-Gades"], awards: ["奥斯卡最佳外语片提名"], streaming: ["Criterion Channel"] },
            { id: "blood", title: "血婚", titleEn: "Blood Wedding", year: 1981, genre: ["剧情"], duration: 72, rating: 7.4, cast: ["Antonio-Gades"], awards: ["戛纳大奖", "奥斯卡最佳外语片提名"], streaming: ["Criterion Channel"] }
        ]
    },
    {
        id: "hong",
        name: "洪尚秀",
        nameEn: "Hong Sang-soo",
        country: "韩国",
        countryFlag: "KR",
        birth: 1960,
        death: null,
        movement: "韩国艺术电影",
        style: "韩国作者电影代表，以极简主义叙事著称。",
        awards: ["威尼斯银狮", "戛纳最佳导演"],
        films: [
            { id: "virgin", title: "处女心经", titleEn: "The Virgin间隔", year: 2000, genre: ["剧情", "喜剧"], duration: 88, rating: 7.3, cast: ["沈智昊", "李恩珠"], awards: [], streaming: ["Criterion Channel"] },
            { id: "nightand", title: "这时对那时错", titleEn: "Right Now, Wrong Then", year: 2015, genre: ["剧情", "喜剧"], duration: 121, rating: 7.4, cast: ["郑在泳", "金敏喜"], awards: ["洛迦诺金豹奖"], streaming: ["Criterion Channel"] }
        ]
    },
    {
        id: "kim",
        name: "金知云",
        nameEn: "Kim Jee-woon",
        country: "韩国",
        countryFlag: "KR",
        birth: 1964,
        death: null,
        movement: "韩国电影崛起",
        style: "类型片大师，以动作、恐怖等多类型驾驭能力著称。",
        awards: ["戛纳一种关注大奖"],
        films: [
            { id: "good", title: "好家伙-坏家伙-怪家伙", titleEn: "The Good, the Bad, the Weird", year: 2008, genre: ["动作", "冒险"], duration: 139, rating: 7.2, cast: ["宋康昊", "李秉宪", "郑雨盛"], awards: [], streaming: ["Netflix"] },
            { id: "last", title: "最后的吸血鬼", titleEn: "Thirst", year: 2009, genre: ["恐怖", "剧情"], duration: 133, rating: 7.1, cast: ["宋康昊"], awards: ["戛纳一种关注大奖"], streaming: ["Amazon Prime"] }
        ]
    },
    {
        id: "fassen",
        name: "维纳-法斯宾德",
        nameEn: "Rainer Werner Fassbinder",
        country: "德国",
        countryFlag: "DE",
        birth: 1945,
        death: 1982,
        movement: "德国新电影",
        style: "德国新电影核心人物，以对边缘群体的关注著称。",
        awards: ["戛纳最佳导演", "威尼斯金狮"],
        films: [
            { id: "marriage", title: "玛丽亚-布劳恩的婚姻", titleEn: "The Marriage间隔", year: 1979, genre: ["剧情"], duration: 120, rating: 7.6, cast: ["罗瑟琳-布劳内尔", "克劳斯-洛"], awards: [], streaming: ["Criterion Channel"] },
            { id: "berlin", title: "柏林亚历山大广场", titleEn: "Berlin Alexanderplatz", year: 1980, genre: ["剧情"], duration: 502, rating: 8.0, cast: ["沃尔克-斯彭格特"], awards: [], streaming: ["Criterion Channel"] }
        ]
    },
    {
        id: "bilal",
        name: "阿卜杜勒-拉蒂夫-巴西克",
        nameEn: "Abdellatif Kechiche",
        country: "法国",
        countryFlag: "FR",
        birth: 1958,
        death: null,
        movement: "法国电影",
        style: "法籍导演，以对移民身份、文化冲突的探索著称。",
        awards: ["戛纳评审团大奖", "威尼斯银狮"],
        films: [
            { id: "days", title: "生活是美的", titleEn: "Life Is间隔", year: 1995, genre: ["剧情"], duration: 130, rating: 7.3, cast: ["Sami-Bouajila", "Ghofrane-Shabou"], awards: ["威尼斯银狮", "奥斯卡最佳外语片提名"], streaming: ["Criterion Channel"] },
            { id: "blue", title: "蓝色是最温暖的颜色", titleEn: "Blue Is the Warmest Color", year: 2013, genre: ["剧情", "爱情"], duration: 180, rating: 7.8, cast: ["Léa Seydoux", "Adèle Exarchopoulos"], awards: ["戛纳金棕榈奖"], streaming: ["Netflix", "Amazon Prime"] }
        ]
    },
    {
        id: "tango",
        name: "埃米尔-库斯图里卡",
        nameEn: "Emir Kusturica",
        country: "塞尔维亚",
        countryFlag: "RS",
        birth: 1954,
        death: null,
        movement: "巴尔干魔幻现实主义",
        style: "巴尔干魔幻现实主义大师，以疯狂的喜剧著称。",
        awards: ["戛纳金棕榈x2", "戛纳最佳导演"],
        films: [
            { id: "underground", title: "地下", titleEn: "Underground", year: 1995, genre: ["剧情", "喜剧"], duration: 170, rating: 8.1, cast: ["米基-马诺洛维克", "拉扎尔-里斯特夫斯基"], awards: ["戛纳金棕榈奖"], streaming: ["Netflix", "Amazon Prime"] },
            { id: "black", title: "黑猫白猫", titleEn: "Black间隔", year: 1998, genre: ["剧情", "喜剧"], duration: 125, rating: 7.7, cast: ["布兰科-德加尔戈", "埃米尔-库斯图里卡"], awards: ["戛纳最佳导演"], streaming: ["Amazon Prime"] }
        ]
    },
    {
        id: "agelo",
        name: "西奥-安哲罗普洛斯",
        nameEn: "Theo间隔",
        country: "希腊",
        countryFlag: "GR",
        birth: 1935,
        death: 2012,
        movement: "诗电影",
        style: "希腊诗电影大师，以缓慢的节奏、迷雾般的意象著称。",
        awards: ["戛纳金棕榈", "威尼斯金狮", "戛纳评审团大奖"],
        films: [
            { id: "greece", title: "雾中风景", titleEn: "Landscape间隔", year: 1988, genre: ["剧情"], duration: 127, rating: 7.7, cast: ["托塔-加萨瓦斯"], awards: ["戛纳评审团大奖"], streaming: ["Criterion Channel"] },
            { id: "eternal", title: "永恒与一天", titleEn: "Eternity间隔", year: 1998, genre: ["剧情"], duration: 137, rating: 7.5, cast: ["布鲁诺-甘茨"], awards: ["戛纳金棕榈奖"], streaming: ["Criterion Channel"] }
        ]
    },
    {
        id: "mira",
        name: "米拉-奈尔",
        nameEn: "Mira Nair",
        country: "印度",
        countryFlag: "IN",
        birth: 1957,
        death: null,
        movement: "印度新电影",
        style: "印度裔美国导演，以对印度文化的现代视角著称。",
        awards: ["金狮奖", "戛纳大奖", "奥斯卡提名"],
        films: [
            { id: "monsoon", title: "季风婚礼", titleEn: "Monsoon Wedding", year: 2001, genre: ["剧情", "喜剧", "爱情"], duration: 102, rating: 7.2, cast: ["Vijay-Razz", "Lisa-Ray"], awards: ["金狮奖", "金球奖最佳外语片提名"], streaming: ["Amazon Prime"] },
            { id: "salaam", title: "早安孟买", titleEn: "Salaam Bombay!", year: 1988, genre: ["剧情"], duration: 125, rating: 7.6, cast: ["Shafiq", "Niram-Pathak"], awards: ["戛纳大奖", "金球奖最佳外语片提名"], streaming: ["Criterion Channel"] }
        ]
    },
    {
        id: "david",
        name: "大卫-里恩",
        nameEn: "David间隔",
        country: "英国",
        countryFlag: "UK",
        birth: 1908,
        death: 1977,
        movement: "经典英国电影",
        style: "史诗导演，以宏大的历史叙事著称。",
        awards: ["奥斯卡最佳导演", "金球奖", "BAFTA"],
        films: [
            { id: "lawrence", title: "阿拉伯的劳伦斯", titleEn: "Lawrence间隔", year: 1962, genre: ["剧情", "历史", "战争"], duration: 227, rating: 8.3, cast: ["Peter-O'Toole", "Alec-Guinness"], awards: ["奥斯卡最佳影片", "奥斯卡最佳导演", "奥斯卡最佳摄影"], streaming: ["Amazon Prime"] },
            { id: "doctor", title: "日瓦戈医生", titleEn: "Doctor间隔", year: 1965, genre: ["剧情", "爱情"], duration: 197, rating: 7.6, cast: ["Omar-Sharif", "Julie-Christie"], awards: ["金球奖最佳剧情片", "金球奖最佳导演"], streaming: ["Amazon Prime"] },
            { id: "bridge", title: "桂河大桥", titleEn: "The Bridge on the River Kwai", year: 1957, genre: ["剧情", "战争"], duration: 161, rating: 8.2, cast: ["William-Holden", "Alec-Guinness"], awards: ["奥斯卡最佳影片", "奥斯卡最佳导演"], streaming: ["Criterion Channel", "Amazon Prime"] }
        ]
    },
    {
        id: "ken",
        name: "肯-洛奇",
        nameEn: "Ken间隔",
        country: "英国",
        countryFlag: "UK",
        birth: 1936,
        death: null,
        movement: "英国社会现实主义",
        style: "英国社会现实主义代表，以对工人阶级生活的描绘著称。",
        awards: ["戛纳金棕榈x2", "威尼斯金狮", "奥斯卡最佳外语片"],
        films: [
            { id: "kes", title: "凯斯", titleEn: "Kes", year: 1969, genre: ["剧情"], duration: 110, rating: 7.7, cast: ["David-Bradley"], awards: [], streaming: ["Criterion Channel", "Amazon Prime"] },
            { id: "wind", title: "风吹麦浪", titleEn: "The Wind间隔", year: 2006, genre: ["剧情", "战争"], duration: 127, rating: 7.5, cast: ["Cillian-Murphy", "Padraic-Delaney"], awards: ["金棕榈提名"], streaming: ["Amazon Prime"] }
        ]
    }
];

// 奖项数据
var AWARDS_DATA = {
    oscar: { name: "奥斯卡金像奖", nameEn: "Academy Awards", icon: "Trophy", films: [] },
    cannes: { name: "戛纳电影节", nameEn: "Cannes Film Festival", icon: "Palm", films: [] },
    venice: { name: "威尼斯电影节", nameEn: "Venice Film Festival", icon: "Lion", films: [] },
    berlin: { name: "柏林电影节", nameEn: "Berlin International Film Festival", icon: "Bear", films: [] },
    "golden-globe": { name: "金球奖", nameEn: "Golden Globe Awards", icon: "Star", films: [] }
};

// 初始化奖项数据
function initAwardsData() {
    DIRECTORS_DATA.forEach(function(director) {
        director.films.forEach(function(film) {
            if (film.awards) {
                film.awards.forEach(function(award) {
                    var awardKey = null;
                    if (award.indexOf("奥斯卡") >= 0 || award.indexOf("Academy") >= 0) awardKey = "oscar";
                    else if (award.indexOf("戛纳") >= 0 || award.indexOf("Cannes") >= 0) awardKey = "cannes";
                    else if (award.indexOf("威尼斯") >= 0 || award.indexOf("Venice") >= 0) awardKey = "venice";
                    else if (award.indexOf("柏林") >= 0 || award.indexOf("Berlin") >= 0) awardKey = "berlin";
                    else if (award.indexOf("金球") >= 0 || award.indexOf("Golden Globe") >= 0) awardKey = "golden-globe";

                    if (awardKey) {
                        AWARDS_DATA[awardKey].films.push({ film: film, director: director.name });
                    }
                });
            }
        });
    });
}

initAwardsData();
