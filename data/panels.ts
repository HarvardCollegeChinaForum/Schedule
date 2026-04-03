export type PanelSpeaker = {
  name: string;
  title: string;
  nameZh: string;
  titleZh: string;
};

export type PanelTrack = {
  title: string;
  titleZh: string;
  venueId: string;
  description: string;
  descriptionZh: string;
  speakers: PanelSpeaker[];
};

const speaker = (
  name: string,
  title: string,
  nameZh = name,
  titleZh = title,
): PanelSpeaker => ({
  name,
  title,
  nameZh,
  titleZh,
});

export const panelTracks = {
  business: {
    title: "The New Global Business Order",
    titleZh: "全球商业变局",
    venueId: "nw-b103",
    description: `China’s domestic economy and its cross-border business environment continue to reshape global industries and corporate strategies. Bringing together leaders from industry and academia, this panel explores how companies are navigating China’s dynamic market, including the challenges posed by geopolitical uncertainty and a shifting consumer economy. As the country accelerates its transition toward technology and service-driven development, the discussion will examine how this evolution is reshaping sectors––from tourism and entertainment to finance and professional services––and what it takes for businesses to succeed as China redefines its economic priorities.`,
    descriptionZh: `中国国内经济与跨境营商环境，正持续重塑全球产业格局与企业战略。从消费市场的结构性调整，到技术与服务融合的加速推进，中国经济的演变正深刻影响着各行各业的发展路径。本场分论坛汇聚业界与学界领袖，围绕企业如何应对中国市场的动态变化展开深度对话，系统探讨在地缘政治不确定性、消费经济转型、监管环境演变等多重背景下，跨国公司与中国企业所面临的机遇与挑战。

随着中国加速迈向以技术与服务双轮驱动的发展新阶段，新兴业态不断涌现。嘉宾们将聚焦这一转型对旅游、娱乐、金融、专业服务等关键行业的深远影响，分析行业格局的重塑逻辑，并探讨企业如何在战略布局、本土化运营、风险管控与创新投入等方面作出精准应对。在中国经济优先事项重新定义、高质量发展成为核心目标的当下，本场分论坛旨在为各界提供前瞻性思考与实践经验分享，助力企业在复杂多变的环境中把握方向、实现可持续发展。`,
    speakers: [
      speaker("Alex Peng", "Moderator; President and CFO, TAL Education Group", "彭壮壮", "主持人；好未来教育集团总裁、首席财务官"),
      speaker("Philip Cheng", "Director, Galaxy Entertainment Group", "程裕昇", "银河娱乐集团董事"),
      speaker(
        "William Kirby",
        "T. M. Chang Professor of China Studies and Spangler Family Professor of Business Administration, Harvard University",
        "柯伟林",
        "哈佛大学 T.M. Chang 中国研究讲席教授、哈佛商学院斯宾格勒家族工商管理学讲席教授",
      ),
      speaker("Manuel Menendez", "Founder and CEO, MCM Group Holdings", "孟德士", "MCM控股集团创始人、首席执行官"),
      speaker("Mitchell Presnick", "Founder, Super 8 Hotels China", "柏力", "速8酒店中国创始人"),
    ],
  },
  journalism: {
    title: "Contemporary Reporting on China",
    titleZh: "当代中国报道",
    venueId: "yenching-230",
    description: `In an era of geopolitical rivalry and increasingly contested narratives, journalism on China shapes how millions of readers understand one of the world's top superpowers and most populous nations. As media ecosystems fragment and public trust in information erodes, reporting on China is as challenging and urgent as ever.

This panel brings together leading journalists and media leaders to examine how reporting on China is evolving in a rapidly changing global environment. The discussion will explore the forces shaping contemporary reporting on China, from changes in media institutions to evolving readership habits and technological upheavals. Join veteran China correspondents and top editors as they break down the emerging questions and perennial challenges in reporting on China for the world.`,
    descriptionZh: `在地缘政治博弈日趋白热化、公众对新闻的信任持续流失、媒体生态走向深度碎片化的三重背景下，涉华报道已不再仅是信息传递，而成为塑造全球公众如何理解中国的核心变量。本场分论坛汇聚海内外顶尖记者与媒体领袖，聚焦媒体机构的制度调适、读者习惯的结构性迁移、以及人工智能与数字平台带来的技术颠覆，深入探讨涉华报道在变局中的演变路径。嘉宾们将结合一线实践，剖析面向全球报道中国时所面临的如算法偏见、信息战、跨文化误读等新兴议题，以及信源获取、立场平衡、事实核查等经典挑战，并分享应对之道与前瞻思考。`,
    speakers: [
      speaker(
        "Charles Hutzler",
        "Former China Bureau Chief, The Wall Street Journal; Former China Bureau Chief, The Associated Press",
        "韩村乐",
        "《华尔街日报》前中国分社社长；《美联社》前中国分社社长",
      ),
      speaker("Eric Olander", "Editor-in-Chief, The China Global South Project", "欧瑞克", "中南项目主编"),
      speaker(
        "Jane Perlez",
        "Host, Face-Off: US vs China; Former Beijing Bureau Chief, The New York Times",
        "裴若思",
        "Face-Off: US vs China 博客主持人，《纽约时报》前北京分社社长",
      ),
      speaker(
        "Lihui Zhang",
        "M-RCBG Senior Fellow, Harvard Kennedy School; Former President, Caixin Media",
        "张立晖",
        "财新传媒总裁",
      ),
    ],
  },
  chineseWisdom: {
    title: "Chinese Wisdom and Innovation",
    titleZh: "东方智慧与战略创新",
    venueId: "nw-b103",
    description:
      "This Chinese-language panel brings together founders, operators, and investors to discuss how Chinese business thinking is being translated into modern strategy and brand building. The conversation focuses on leadership, growth, and how cultural intuition can become an engine for innovation.",
    descriptionZh:
      "这场中文分论坛汇聚企业家、经营者与投资人，探讨中国式商业智慧如何转化为当代战略、品牌塑造与组织创新。讨论将聚焦领导力、增长方法，以及文化洞察如何真正转化为创新能力。",
    speakers: [
      speaker(
        "Yuan Zou",
        "Moderator; Assistant Professor in Accounting and Management, Harvard Business School",
        "邹媛",
        "主持人；哈佛商学院会计与管理系助理教授",
      ),
      speaker("Bolong Li", "Vice President and Head of Growth Marketing, Amazon Audible", "李博隆", "亚马逊 Audible 副总裁、全球增长负责人"),
      speaker("Geping Mao", "Founder and Chairman, MAOGEPING Cosmetics Co.", "毛戈平", "毛戈平美妆品牌创始人、董事长"),
      speaker("Noah Xie", "Chairman and CEO, Kmind Consulting", "谢伟山", "君智咨询董事长兼CEO"),
      speaker("Eugene Zhang", "Founding Partner, TSVC", "张于庆", "TSVC联合创始人"),
    ],
  },
  bridges: {
    title: "New Centers and Bridges of Innovation",
    titleZh: "再造桥梁：香港的创新时代",
    venueId: "yenching-230",
    description: `This panel explores Hong Kong’s unique role as a bridge between China and the global economy. Drawing on the leadership experience of our discussants across international markets, the discussion will examine how Hong Kong’s particular history and culture, legal framework, financial infrastructure, and global connectivity position it as a critical gateway for the world’s engagement with China. Panelists will share insights on navigating differences across business environments, fostering international partnerships, and leveraging Hong Kong’s status as a hub for capital, talent, and innovation. Beyond business, the conversation will also touch on Hong Kong’s cultural hybridity—where East meets West—and how this distinct identity enhances its ability to facilitate trust and collaboration. Attendees will gain a deeper understanding of how Hong Kong continues to evolve as a dynamic intermediary, enabling companies and investors to access opportunities in China while remaining firmly connected to the global marketplace.`,
    descriptionZh: `本场分论坛聚焦香港作为连接中国与全球经济桥梁的独特角色。依托各位嘉宾在国际市场中积累的丰富领导经验，讨论将深入剖析香港独特的历史文化、法律体系、金融基础设施以及全球联通能力，如何共同塑造其作为世界与中国互动关键门户的战略地位。

与会嘉宾将分享在跨营商环境中驾驭差异的实战洞察，探讨如何培育国际合作伙伴关系，并充分发挥香港作为资本、人才与创新枢纽的核心优势。超越商业范畴，对话还将延伸至香港“融汇东西”的文化混合性，探讨这一独特身份如何有效增进信任、促进多方协作。参会者将深入理解香港作为充满活力的动态中介者如何持续演进，助力企业与投资者在牢牢对接全球市场的同时，精准把握中国机遇。`,
    speakers: [
      speaker(
        "Bernard Chan",
        "Chairman, West Kowloon Cultural District; Chairman, Asia Financial; Chairman, Our Hong Kong Foundation",
        "陈智思",
        "香港西九龙文化区董事长，亚洲金融集团董事长，团结香港基金董事长",
      ),
      speaker("Kenny Lam", "CEO, Two Sigma Asia Pacific", "林国沣", "Two Sigma亚太区首席执行官"),
    ],
  },
  latinAmerica: {
    title: "China and Latin America",
    titleZh: "中拉关系与发展",
    venueId: "nw-b101",
    description: `Latin America is emerging as a central arena for global influence, sitting at the intersection of great power interests. With the United States and China both increasingly invested in Latin America, understanding the region’s dynamics will be essential to analyzing the geopolitical and economic balance of power.

This panel brings together preeminent scholars and leaders from the private sector to examine how China’s expanding presence, from trade and investment to infrastructure and finance, is defining relationships across the Western Hemisphere. The conversation will explore how the United States, China, and Latin America are balancing growing economic ties with rising geopolitical competition, and what these dynamics mean for trade and regional influence in the years ahead.`,
    descriptionZh: `随着全球力量格局的演变，拉丁美洲正逐渐成为大国影响力交汇的关键区域。在美国与中国对该地区的投入不断加深之际，理解拉美的内部动态，对于分析未来地缘政治与经济权力的平衡具有重要意义。

本场论坛汇聚来自学界与私营部门的多位重量级专家，围绕中国在拉丁美洲不断扩展的影响力展开深入探讨——从贸易与投资到基础设施与金融合作，这些因素正重塑整个西半球的互动关系。讨论将聚焦于美国、中国与拉丁美洲如何在深化经济联系的同时，应对日益上升的地缘竞争，以及这一系列变化将如何影响未来的贸易格局与区域影响力走向。`,
    speakers: [
      speaker("Bill Ding", "Moderator; Country Manager for Mexico, Alibaba Group", "丁逸伦", "主持人；阿里巴巴墨西哥国家经理"),
      speaker(
        "Robert Evan Ellis",
        "Latin America Research Professor and General Douglas Macarthur Research Chair, U.S. Army War College Strategic Studies Institute",
        "Robert Evan Ellis",
        "美国陆军战争学院战略研究所拉丁美洲研究教授、麦克阿瑟讲席教授",
      ),
      speaker(
        "Margaret Myers",
        "Managing Director of the Institute for America, China, and the Future of Global Affairs, Johns Hopkins University; Senior Advisor of the Asia & Latin America Program, Inter-American Dialogue",
        "Margaret Myers",
        "约翰斯·霍普金斯大学美中与全球事务研究所常务主任，美洲对话组织亚洲与拉美项目高级顾问",
      ),
      speaker("Brian Zhong", "Solution Architect Lead for Latin America, Alibaba Cloud US", "仲炳辉", "阿里云美国拉丁美洲解决方案架构负责人"),
    ],
  },
  ventureCapital: {
    title: "VC Investing: AI Disruption and Companies Built to Last",
    titleZh: "VC 投资逻辑：AI 变革与长期赢家",
    venueId: "nw-b103",
    description: `Building a venture-backed company has always been about turning insight into execution, but in 2025–2026, the rules of the game are quickly shifting. Higher cost of capital, tighter liquidity, and an increasingly unpredictable geopolitical environment are reshaping fundraising, talent recruitment, supply chains, and exit paths. At the same time, breakthroughs in AI are changing what it means to build, scale, and defend a startup.

This Venture Capital Panel brings together investors and founders with deep experience across the U.S. and China ecosystems to discuss where capital is flowing, what diligence looks like in a world of rapid technological change, and how teams can build durable companies amid uncertainty. The conversation will cover macro trends, cross-border constraints and opportunities, and the practical realities of building in sectors ranging from AI infrastructure and applications to hard tech, biotech, and consumer.

Speakers will share concrete frameworks: from evaluating product moats and go-to-market signals, to structuring companies for global markets, to navigating regulatory and geopolitical considerations. Above all, the panel aims to answer one question: what does it take to build a venture-scale company (and a high-return venture portfolio) right now?`,
    descriptionZh: `在风险投资支持下打造一家创业公司，过去一直是把洞察转化为执行力的过程；但在 2025–2026 年，游戏规则正在快速改变。资本成本上升、流动性趋紧，以及愈发不可预测的地缘政治环境，正在重塑融资节奏、人才招募、供应链布局与退出路径。与此同时，AI 的突破也在改写创业公司“如何构建、如何扩张、如何防守”的底层逻辑。

本场分论坛汇聚了来自中美两大生态、兼具深厚实战经验的投资人与创业者，共同探讨风投行业的核心议题：资金正流向哪里？在技术加速迭代的当下，尽职调查应重点关注哪些关键点？团队又该如何在不确定性中，打造真正具备韧性与长期竞争力的公司？讨论将覆盖宏观趋势、跨境机遇与限制，并深入AI基础设施与应用、硬科技、消费等赛道，分享真实可落的实战经验——从识别产品护城河与商业化落地的关键信号，到面向全球市场设计组织架构，再到监管与地缘政治变量下的战略选择。这些讨论最终指向一个核心问题：在今天，要打造一家具备风险投资级别增长潜力与回报空间的公司，同时构建高回报的风险投资组合，究竟需要什么？`,
    speakers: [
      speaker(
        "Vanessa Liu",
        "Moderator; Co-Founder and CEO, Sugarwork; Chair, Appen; Non-Executive Director, Goodman Group",
        "Vanessa Liu",
        "主持人；Sugarwork联合创始人、首席执行官，澳鹏董事长，嘉民集团非执行董事",
      ),
      speaker("Fritz Demopoulos", "Partner, Queen's Road Capital", "戴福瑞", "皇后大道投资公司合伙人"),
      speaker("Ian Goh", "Managing Partner, 01VC", "吴运龙", "01VC管理合伙人"),
      speaker("Holly Zheng", "Founding Partner, EnvisionX Capital; Chairwoman, BlueFocus International", "郑泓", "嘉加资本创始合伙人，蓝标国际董事长"),
      speaker("Wei Zhou", "Former Managing Partner, KPCB China; Founder, Cyber Creation Ventures (CCV)", "周炜", "创世伙伴创投创始主管合伙人"),
    ],
  },
  art: {
    title: "Chinese Art in the Public Imagination",
    titleZh: "中国艺术的公共叙事",
    venueId: "yenching-230",
    description: `Western encounters with Chinese art have shaped not only how these works have been interpreted and valued, but also how they have been presented and experienced by wider audiences over time. From early exchanges in the 16th and 17th centuries to contemporary museum practice, this panel considers the evolving frameworks (scholarly, institutional, cultural, and geopolitical) that have informed Western understandings of traditional Chinese art.

The discussion will explore both historical turning points and present-day challenges, with particular attention to how museums, scholars, and public-facing initiatives make Chinese art accessible and meaningful to diverse audiences. Topics include the impact of changing ethical standards, the role of exhibitions and events such as Asia Week New York, and the growing importance of digital curation and online platforms in expanding access, interpretation, and global engagement. The panel will also consider how institutions can connect with the public through innovative storytelling, education, and cross-institutional partnerships.

Looking ahead, the conversation turns to the broader significance of traditional Chinese art today: how it can foster cultural understanding, reach new publics, and remain relevant in a rapidly changing, digitally connected world. It will also consider how scholarship can become more inclusive and publicly engaged, and how art, museums, and academic collaboration might serve as bridges for dialogue and mutual understanding between East and West in the years to come.`,
    descriptionZh:
      "本场论坛聚焦西方与中国艺术相遇的历史如何影响作品的阐释、价值判断与公共呈现方式，并讨论博物馆、学术研究、展览活动与数字策展如何成为传统中国艺术连接更广泛全球受众的桥梁。",
    speakers: [
      speaker("Eugene Wang", "Moderator; Abby Aldrich Rockefeller Professor of Asian Art, Harvard University", "汪悦进", "主持人；哈佛大学艺术史系洛克菲勒亚洲艺术史专席教授"),
      speaker("Maxwell K. Hearn", "Douglas Dillon Chairman of the Department of Asian Art, The Metropolitan Museum of Art", "何慕文", "纽约大都会艺术博物馆亚洲部主任"),
      speaker(
        "Angela McAteer",
        "Senior Vice President and International Head of Department, Chinese Ceramics and Works of Art, Europe and Americas, Sotheby's",
        "Angela McAteer",
        "苏富比高级副总裁、中国陶瓷及艺术品（欧美地区）部主管",
      ),
      speaker("Alice Teng", "Executive Director, Asia Week New York", "Alice Teng", "亚洲艺术周执行董事"),
    ],
  },
  sustainability: {
    title: "Renewable Energy and the Carbon Economy",
    titleZh: "新能源与碳经济",
    venueId: "nw-b101",
    description: `As sustainability takes on growing strategic importance across business, policy, and global development, new energy stands at the center of the transition to a cleaner and more resilient future. From the expansion of solar power and clean technologies to the development of carbon markets and green finance, this transformation is reshaping industries, investment priorities, and international cooperation. Yet significant questions remain around scale, implementation, and the alignment of commercial growth with long-term environmental goals.

This Sustainability Panel convenes leaders in new energy, carbon research, and international climate collaboration to explore the forces driving the next phase of sustainable development. Panelists will discuss the opportunities and challenges facing the energy transition, the role of innovation and markets in advancing climate solutions, and the partnerships required to create lasting impact.`,
    descriptionZh: `随着可持续发展在企业战略、公共政策和全球发展中的重要性日益提升，新能源正处于迈向更清洁、更具韧性的未来转型的核心。从太阳能发电和清洁技术的扩张，到碳市场和绿色金融的发展，这场转型正在重塑各行各业、投资重点以及国际合作格局。然而，在规模化推进、实际落地，以及商业增长如何与长期环境目标相协调等方面，仍然存在许多重要问题。

本次可持续发展论坛将汇聚新能源、碳研究以及国际气候合作领域的领袖，共同探讨推动下一阶段可持续发展的关键力量。与会嘉宾将围绕能源转型面临的机遇与挑战、创新与市场在推动气候解决方案中的作用，以及如何通过合作伙伴关系实现持久影响等议题展开讨论。`,
    speakers: [
      speaker("Grace Sun", "Moderator; Head of Strategic Marketing and Communications, LONGi North America", "Grace Sun", "主持人；隆基绿能北美区市场战略营销与传播总监"),
      speaker("Eric Luo", "Group Vice President and President of North America, LONGi Solar", "罗鑫", "隆基绿能集团副总裁、北美区总裁"),
      speaker("Meng Meng", "General Manager, Macao International Carbon Emission Exchange", "孟萌", "澳门国际碳排放权交易所总经理"),
      speaker("Paula VanLaningham", "Director of Carbon Research, London Stock Exchange Group", "Paula VanLaningham", "伦敦证券交易所碳研究主管"),
      speaker("Qi Wang", "President and CEO, US-China Green Energy Council", "王麒", "美中绿色能源促进会主席、执行会长"),
    ],
  },
  biotech: {
    title: "Frontiers in Biotechnology",
    titleZh: "生物科技前沿",
    venueId: "nw-b103",
    description: `Biotechnology is entering a new era shaped not only by scientific breakthroughs, but also by changes in capital, geopolitics, and global talent. As AI transforms drug discovery and new therapies push the boundaries of medicine, the key question is no longer just what can be invented, but how innovation is financed, scaled, and brought to global markets. Bringing together leaders from investment, industry, and AI-driven biotech, this panel will explore the evolving life sciences landscape, including shifting funding dynamics, challenges in commercialization, China’s growing role in global biotech, and the impact of U.S.–China relations. In an increasingly complex and interconnected world, what will shape the future of biotech innovation, and how will it be realized?`,
    descriptionZh: `生物技术正进入一个新时代，这一时代不仅由科学突破所驱动，也深受资本变化、地缘政治以及全球人才流动重塑。

随着人工智能正在改变药物发现的方式，新型疗法不断拓展现代医学的边界，关键问题已不再只是“能够发明什么”，而是“创新如何获得融资、如何实现规模化、以及如何进入全球市场”。本场论坛将汇聚来自投资界、产业界以及AI驱动型生物科技领域的领袖，共同探讨不断演变的生命科学格局，包括融资环境的变化、商业化面临的挑战、中国在全球生物技术中的日益重要角色，以及中美关系带来的影响。在这个日益复杂且高度互联的世界中，什么将决定生物技术创新的未来？这一未来又将如何真正实现？`,
    speakers: [
      speaker("Wei Tao", "Moderator; Director, Blavatnik Harvard Life Lab", "陶崴", "主持人；哈佛Blavatnik生命科学实验室负责人"),
      speaker("Nicholas Galakatos", "Global Head of Life Sciences, Blackstone Group", "Nicholas Galakatos", "黑石集团生命科学全球主管"),
      speaker("Suguna Rachakonda", "Vice President of Business Development, Insilico Medicine", "Suguna Rachakonda", "英矽智能高级业务发展负责人"),
    ],
  },
  africa: {
    title: "China and Africa",
    titleZh: "中非贸易合作",
    venueId: "yenching-230",
    description: `At a moment of geopolitical uncertainty, and on the eve of China’s landmark zero-tariff policy for 53 African nations, this panel convenes leading scholars, policymakers, and investors to reexamine the evolving dynamics of China-Africa relations. Against a backdrop of shifting Western trade frameworks and rising great-power rivalry, the timing invites a fresh assessment of where this relationship stands and where it is headed. The discussion brings together perspectives from law, development research, public finance, and international investment to explore how partnerships between African nations and China are shaping economic growth, infrastructure development, and financial integration across the continent. Drawing on firsthand experience, speakers will assess both the opportunities and challenges of these engagements, including debt sustainability, industrialization, and local capacity building. The conversation will also consider the broader geopolitical and historical context, highlighting how China-Africa ties are influencing global development paradigms. Attendees will gain nuanced insights into the strategic, economic, and institutional dimensions of this relationship, as well as practical considerations for fostering more balanced, transparent, and mutually beneficial partnerships in the years ahead.`,
    descriptionZh: `在地缘政治充满不确定性的当下，恰逢中国对53个非洲国家实施零关税政策前夕，本场分论坛汇聚知名学者、政策制定者与投资界人士，共同重新审视中非关系的最新发展态势。面对西方贸易框架的调整与大国竞争的加剧，这一特殊时点促使我们重新思考中非关系究竟处于何种阶段，又将走向何方。

来自法律、发展研究、公共财政与国际投资等不同领域的专家，将围绕非洲国家与中国在经济增长、基础设施建设与金融融合等方面的合作实践进行深入探讨。嘉宾们将结合一线经验，全面分析中非合作进程中的机遇与挑战，重点聚焦债务可持续性、工业化进程以及本地能力建设等关键议题。

论坛还将从更广阔的地缘政治与历史视角出发，探讨中非关系如何对全球发展范式产生深远影响。通过本场讨论，与会者将深入了解中非关系在战略、经济与制度层面的多重维度，并探讨未来如何推动构建更加平衡、透明、互利共赢的合作关系。`,
    speakers: [
      speaker("Idriss Fofana", "Moderator; Assistant Professor of Law and Affiliate Assistant Professor of History, Harvard University", "Idriss Fofana", "主持人；哈佛大学法学院助理教授、历史系助理教授"),
      speaker("Sufian Beker", "Former Finance Minister of Ethiopia", "Sufian Beker", "埃塞俄比亚前财政部部长"),
      speaker(
        "Jing Gu",
        "Director of the Centre for Rising Powers and Global Development, Institute of Development Studies; Leader of the IDS China Centre; Chair Professor of International Development, China Agricultural University",
        "谷靖",
        "英国国际发展研究院资深研究员、新兴国家与全球发展中心主任、中国中心负责人；中国农业大学国际发展讲座教授",
      ),
      speaker("Zemedeneh Negatu", "CEO, CBE Capital Investment Bank; Chairman, Fairfax Africa Fund (U.S.)", "Zemedeneh Negatu", "埃塞俄比亚商业银行资本投资银行首席执行官；Fairfax Africa Fund（美国）董事长"),
    ],
  },
  aiScience: {
    title: "AI x Science: The Future Beyond Scaling",
    titleZh: "AI x Science：超越规模法则的未来",
    venueId: "science-b",
    description: `This panel brings together leading voices from academia and industry to explore the next frontier of artificial intelligence: the profound intersection of AI and scientific discovery.

As we look beyond the limits of today’s scaling paradigm, panelists will examine emerging breakthroughs in AI for Science. The discussion will focus on how advanced AI is fundamentally transforming scientific research. Speakers will also address the critical gap between AI theory and scientific deployment, the challenges of interpretability in complex models, and what it takes to build open, reliable AI systems that drive the next generation of scientific innovation.`,
    descriptionZh: `本场论坛汇聚来自学术界与产业界的顶尖专家，共同探讨人工智能的最前沿领域：AI 与科学发现的深度交汇。

随着当前“规模法则（Scaling Laws）”的红利触及瓶颈，与会嘉宾将深入剖析 AI for Science 领域的新兴突破方向。讨论将聚焦前沿人工智能如何从根本上重塑科学研究。同时，嘉宾们还将探讨打通 AI 理论与科学应用落地的关键鸿沟、复杂模型的可解释性挑战，以及如何构建开放、可靠的 AI 系统，以真正驱动下一代科学创新。`,
    speakers: [
      speaker("Chuck Ng", "Moderator; Co-Founder, The Foundation for Science and AI Research", "Chuck Ng", "主持人；The Foundation for Science and AI Research 联合创始人"),
      speaker(
        "David Alvarez-Melis",
        "Assistant Professor of Computer Science, Harvard SEAS; Senior Researcher, Microsoft Research New England",
        "David Alvarez-Melis",
        "哈佛大学工程与应用科学学院副教授，微软新英格兰研究院资深研究员",
      ),
      speaker(
        "Song Han",
        "Associate Professor, Department of Electrical Engineering and Computer Science, MIT; Distinguished Scientist and Director of Efficient AI Research, NVIDIA",
        "Song Han",
        "麻省理工学院电气工程与计算机科学系副教授；英伟达杰出科学家、高效AI研究总监",
      ),
      speaker(
        "Mengdi Wang",
        "Associate Professor, Department of Electrical and Computer Engineering and Center for Statistics and Machine Learning, Princeton University",
        "王梦迪",
        "普林斯顿大学电子与计算机工程系教授、人工智能创新中心主任",
      ),
      speaker("Yun Zhang", "CEO and Co-Founder, Wyze", "张筠", "Wyze创始人、首席执行官"),
    ],
  },
  history: {
    title: "Historical Foundations of China's Urban Transformation",
    titleZh: "中国城市转型的历史根源",
    venueId: "science-c",
    description: `This panel examines how China’s contemporary urbanization and migration are rooted in longer historical processes of governance, social differentiation, and spatial reorganization. Rather than treating reform-era changes as entirely new, the discussion will trace how patterns of local governance, population control, and territorial planning, from late imperial China to the present, have shaped who can move, settle, and access resources.

Panelists will explore how systems of classification and exclusion, the restructuring of rural institutions through urbanization, and persistent regional inequalities have evolved over time, and how these dynamics continue to define the limits of citizenship and social inclusion today. By bringing historical, political, and spatial perspectives into conversation, the panel will offer a more grounded understanding of how China’s current urban landscape has been historically produced, and what that implies for its future trajectory.`,
    descriptionZh: `随着中国当代城市化与人口流动的加速推进，其背后深深植根于更为悠久的历史进程之中，这些进程涉及治理方式、社会分化以及空间重组等多个层面。本场论坛并不将改革时期的变化视为全新的现象，而是回溯自晚期帝制中国至今在地方治理、人口管控与空间规划方面延续与演变的制度逻辑，探讨这些因素如何塑造了人们的流动、定居与资源获取方式。

与会学者将进一步分析分类与排除机制的历史演进、城市化进程中乡村制度的重构，以及长期存在的区域不平等如何在不同阶段被不断塑造，并持续界定着当代公民身份与社会融入的边界。通过整合历史、政治与空间多重视角，本场讨论力图提供一种更为扎实的理解框架，以把握中国当下城市格局的历史生成过程，以及其对未来发展路径的深远启示。`,
    speakers: [
      speaker(
        "Cindy Fan",
        "Vice Provost for International Studies and Global Engagement and Professor of Geography, University of California, Los Angeles",
        "范芝芬",
        "加州大学洛杉矶分校国际研究及全球事务副教务长、地理学教授",
      ),
      speaker("Nick Smith", "Assistant Professor of Architecture and Urban Studies at Barnard College, Columbia University", "Nick Smith", "哥伦比亚大学巴纳德学院建筑与城市研究助理教授"),
      speaker("Dorothy Solinger", "Professor Emerita of Political Science, University of California, Irvine", "苏黛瑞", "加州大学尔湾分校政治学系荣誉退休教授"),
      speaker("Michael Szonyi", "Frank Wen-Hsiung Wu Memorial Professor of Chinese History, Harvard University", "宋怡明", "哈佛大学吴文雄中国历史讲席教授"),
    ],
  },
  southeastAsia: {
    title: "China and Southeast Asia",
    titleZh: "中国和东南亚",
    venueId: "science-d",
    description: `In an era marked by both economic interdependence and strategic rivalry, the evolving dynamics between the United States and China have profound implications for Southeast Asia. As Washington and Beijing vie for influence in a region rich in natural resources, burgeoning markets, and strategic waterways, Southeast Asian nations find themselves navigating a complex web of opportunities and challenges. This panel will set the stage by examining how relations between the two great powers are reshaping regional security architectures, trade patterns, and diplomatic alliances, ultimately influencing the developmental trajectory of Southeast Asia.

Bringing together a distinguished group of experts, the panel will offer multifaceted insights into these critical issues. The panel will tackle key questions such as: How can Southeast Asia balance relations with two competing superpowers? What are the long-term implications for regional stability and economic growth? And how might Southeast Asia maintain its prevalence in an increasingly volatile world?`,
    descriptionZh: `在一个既充满经济相互依存、又伴随战略竞争加剧的时代，中美关系的演变正对东南亚产生深远影响。随着华盛顿和北京在这一拥有丰富自然资源、快速增长市场和重要战略水道的地区争夺影响力，东南亚国家也发现自己正处于一个机遇与挑战交织的复杂格局之中。本场论坛将以此为背景，探讨这两个大国之间关系的变化如何重塑地区安全架构、贸易格局和外交联盟，并最终影响东南亚的发展轨迹。

本场论坛汇聚了一批杰出的专家，将从多重视角对这些关键议题展开深入分析。讨论将围绕若干核心问题展开，例如：东南亚应如何在两个竞争中的超级大国之间保持平衡？这种格局对地区稳定与经济增长的长期影响是什么？以及在一个日益动荡的世界中，东南亚又将如何维持自身的重要性与影响力？`,
    speakers: [
      speaker("Ted Osius", "Virtual Address; Former U.S. Ambassador to Vietnam; President, US-ASEAN Business Council", "Ted Osius", "线上致辞；美国前驻越南大使，美国-东盟商业理事会主席"),
      speaker("Richard Yarrow", "Moderator; Research Fellow at the Mossavar-Rahmani Center for Business and Government, Harvard Kennedy School", "叶理查", "主持人；哈佛肯尼迪学院莫萨瓦-拉赫马尼商业与政治中心研究员"),
      speaker("Muhamad Chatib Basri", "Former Finance Minister of Indonesia", "Muhamad Chatib Basri", "印度尼西亚前财政部部长"),
      speaker("Gregory B. Poling", "Director and Senior Fellow of the Southeast Asia Program and Asia Maritime Transparency Initiative, Center for Strategic and International Studies", "Gregory B. Poling", "战略与国际研究中心亚洲海事透明倡议主管"),
    ],
  },
  film: {
    title: "Film",
    titleZh: "影视",
    venueId: "science-b",
    description:
      "This Chinese-language film panel looks at cinema as both an artistic medium and a public language for understanding contemporary China. Bringing together scholars and filmmakers, it explores visual storytelling, cultural memory, and how film travels across audiences and borders.",
    descriptionZh:
      "这场中文影视论坛将电影视为艺术创作与公共表达的双重媒介，讨论当代中国影像如何被创作、观看与理解。嘉宾将围绕视觉叙事、文化记忆以及电影如何跨越受众与地域传播展开交流。",
    speakers: [
      speaker("Icey Lin", "Moderator; Ph.D. Student in Department of History of Art and Architecture, Harvard University", "林冰洁", "主持人；哈佛大学艺术与建筑历史系博士生"),
      speaker("Jinying Li", "Assistant Professor of Modern Culture and Media, Brown University; Co-Writer, Big Fish and Begonia", "Jinying Li", "布朗大学现代文化与媒体系助理教授，《大鱼海棠》联合创作者"),
      speaker("Wen Song", "Film Director; Founder, FIRST International Film Festival", "宋文", "电影导演，FIRST青年电影展创始人"),
      speaker("Eugene Wang", "Abby Aldrich Rockefeller Professor of Asian Art, Harvard University", "汪悦进", "哈佛大学艺术史系洛克菲勒亚洲艺术史专席教授"),
    ],
  },
  agenticAi: {
    title: "The Future of Agentic AI",
    titleZh: "智能体 AI 的未来",
    venueId: "science-c",
    description: `AI proliferation is in a massive transition as we move from generative models that we can “speak” with to agentic systems that can “act”. Agentic AI can reason, plan, and executive complex workflows across digital and physical environments and represents a major shift in the way we think about AI-assisted work. The central question remains how these autonomous systems will redefine human productivity and industrial capabilities in the world’s leading tech ecosystems.

This panel brings together a group of pioneers that are founding and investing in the more innovative agentic AI breakthroughs. We hope to learn how we can transform fields like enterprise automations and how agents can navigate “messy” real world data. This session will ultimately examine where the next breakthroughs will emerge and how agentic AI can reshape the race for the most capable autonomous systems.`,
    descriptionZh: `随着 AI 的快速普及，我们正经历一场重大转变：从能够与我们“对话”的生成式模型，走向能够真正“行动”的智能体系统。智能体式 AI 能够进行推理、规划，并在数字与物理环境中执行复杂工作流程，这代表着我们对 AI 辅助工作的理解正在发生深刻变化。核心问题在于：这些自主系统将如何重新定义人类生产力，以及世界领先科技生态中的产业能力。

本场论坛汇聚了一批站在智能体式 AI 前沿的创业者与投资人，他们正在推动这一领域最具创新性的突破。我们希望借此探讨，智能体如何改变企业自动化等领域，以及它们如何在充满噪声与复杂性的现实世界数据中进行有效导航。本场讨论最终将聚焦于：下一轮关键突破最有可能出现在哪里，以及智能体式 AI 将如何重塑通往最强自主系统的竞赛格局。`,
    speakers: [
      speaker("Tina Kuang", "Moderator; Investment Principal, Zhenfund", "匡薇", "主持人；真格基金投资总监"),
      speaker("Bill Zhu", "Founder and CEO, Pokee AI; Former Head of Applied RL Group, Meta AI", "朱哲清", "Pokee AI 创始人、首席执行官，Meta AI应用强化学习小组前负责人"),
      speaker("Nan Zhou", "Director and Investment Partner, Qualcomm Ventures", "Nan Zhou", "高通创投总监、投资合伙人"),
      speaker("Yilin Zhao", "Co-Founder, Hyperknow", "赵一霖", "Hyperknow联合创始人"),
      speaker("Louis Shen", "Co-Founder, Futuring Robot", "Louis Shen", "未来不远联合创始人"),
    ],
  },
  globalHealth: {
    title: "China's Role in Global Health",
    titleZh: "公共卫生",
    venueId: "science-d",
    description: `Global health is increasingly shaped by how countries learn from one another, and China has become an important part of that exchange. As one of the world’s leaders in healthcare innovation, roll-out, and technological scaling, analyzing how China’s health reforms, digital health advancements, and growing international partnerships connect to wider challenges such as access interlinked with system resilience is becoming increasingly important to understanding the future of healthcare.

This conversation will explore how innovations around global health flow across borders, while touching on the impact of climate change on human health. What does China bring to the conversation, how have the global health community's attitudes shifted in recent years, and how are these currents shaping the field's future?`,
    descriptionZh: `全球健康体系的演进，日益取决于各国之间的相互学习与经验互鉴，中国已成为这一交流格局中的重要力量。作为全球医疗创新、规模化落地与技术推广的领先者之一，分析中国医疗卫生改革、数字健康进步及其不断扩大的国际伙伴关系，如何与可及性、体系韧性等更广泛的全球健康挑战相连接，对于理解医疗健康的未来走向正变得愈发关键。

本场对话将探讨全球健康领域的创新如何跨越国界流动，同时触及气候变化对人类健康的影响。中国为全球健康议题带来了哪些独特视角？全球健康共同体的态度近年来发生了怎样的转变？这些趋势又将如何塑造该领域的未来图景？`,
    speakers: [
      speaker("Gene Bukhman", "Moderator; Professor of Medicine, Brigham and Women's Hospital; Associate Professor of Global Health and Social Medicine, Harvard Medical School", "Gene Bukhman", "主持人；百瀚和妇女医院医学教授，哈佛医学院全球健康与社会医学副教授"),
      speaker("Louise Liu", "Founder and CEO, Hill Research", "刘瑞华", "Hill Research 创始人、首席执行官"),
      speaker("Cathy Liu", "Vice President of Strategic Partnership, iKang Healthcare Group", "刘宁", "爱康集团策略合作副总裁"),
      speaker("Winnie Yip", "Professor of the Practice of Global Health Policy and Economics, Harvard University", "叶志敏", "哈佛大学公共卫生政策与经济教授"),
    ],
  },
  geopolitics: {
    title: "Perspectives on the Changing Global Landscape",
    titleZh: "国际趋势：解读当今世界格局",
    venueId: "science-b",
    description: `In an era defined by intensifying great-power competition and global uncertainty, the relationship between the United States and China remains the most consequential bilateral relationship of the 21st century. This panel brings together leading scholars, policymakers, and business leaders to explore how strategic competition between major powers intersects with global trade, technological innovation, climate cooperation, and shifting alliances.

As governments and corporations navigate a rapidly shifting geopolitical environment, the panel will consider both the risks of fragmentation and the opportunities for continued cooperation. The panel aims to deliver insight into the forces shaping U.S.-China relations and the strategies that various stakeholders may adopt in responding to evolving challenges.`,
    descriptionZh: `作为定义21世纪地缘政治格局的关键变量，中美关系的走向始终牵动着全球视野。正因如此，深刻理解两国当前面临的战略抉择，其重要性前所未有。本场分论坛将汇聚顶尖学者、外交官、与政策专家，围绕中美关系的演变轨迹及其未来走向展开深度对话。议题将涵盖大国竞争与战略稳定的博弈，同时探寻双方仍具潜力的合作空间。对话将聚焦外交斡旋的最新动态，并剖析经济政策、国际贸易、气候变化等全球性挑战，将如何影响双边关系的未来，乃至整个国际体系的发展方向。`,
    speakers: [
      speaker("Rana Mitter", "Moderator; ST Lee Chair in US-Asia Relations, Harvard Kennedy School", "Rana Mitter", "主持人；哈佛大学肯尼迪政治学院S.T. Lee美亚关系教授"),
      speaker("Graham Allison", "Douglas Dillon Professor of Government, Harvard Kennedy School; Former U.S. Assistant Secretary of Defense for Policy and Plans", "Graham Allison", "哈佛大学肯尼迪学院Douglas Dillon政治学讲席教授，美国前助理国防部长"),
      speaker("Myron Brilliant", "Senior Counselor, DGA-Albright Stonebridge Group; Former Executive Vice President, U.S. Chamber of Commerce", "薄迈伦", "奥尔布赖特石桥集团资深顾问，美国商会前执行副会长"),
      speaker("Jing Qian", "Vice President and Managing Director of the Center for China Analysis, Asia Society", "钱镜", "亚洲协会副总裁、中国分析中心执行主任"),
      speaker("Erik Solheim", "Former Norwegian Minister of Environment and Minister of International Development; Former Executive Director, UN Environment Programme", "Erik Solheim", "挪威前环境部部长、国际发展部部长，联合国前副秘书长兼环境规划署执行主任"),
    ],
  },
  fintech: {
    title: "Fintech",
    titleZh: "金融科技",
    venueId: "science-c",
    description: `Artificial intelligence is fundamentally transforming how capital is allocated, how industries operate, and how financial services reach consumers. From automating investment research and underwriting to enabling new models in insurance and healthcare, AI is no longer a future promise but rather it is actively reshaping the competitive landscape across sectors. Emerging technologies such as blockchain and tokenization are introducing new architectures for how value is created, transferred, and governed. As the U.S. and China develop increasingly distinct paths in regulating and adopting these technologies, the divergence is creating both friction and opportunity for entrepreneurs, investors, and institutions operating across borders. Bringing together founders, investors, and leading researchers, this panel examines what it takes to build, fund, and scale transformative companies at the intersection of AI, finance, and technology and how the evolving U.S.-China landscape is shaping the future of financial innovation.`,
    descriptionZh: `人工智能正在深刻改变资本配置的方式、行业的运行模式，以及金融服务触达用户的路径。从投资研究和信贷审批的自动化，到保险、医疗等领域的新模式，AI已经不再是未来的愿景，而是实实在在地重塑着各行各业的竞争格局。与此同时，区块链、代币化等新兴技术也在为价值的创造、转移和治理提供全新的架构。随着美国和中国在技术监管与落地路径上的差异越来越大，这种分化给跨境发展的创业者、投资人和机构既带来了挑战，也创造了机会。本场分论坛汇聚了创业者、投资人和顶尖学者，将一起探讨：在人工智能、金融与科技的交汇点上，如何打造、投资并做大那些具有变革潜力的公司？以及不断变化的中美格局，将如何影响金融创新的未来？`,
    speakers: [
      speaker("Adam Nguyen", "Moderator; Executive Director, Sora Ventures", "阮亚当", "主持人；Sora Ventures 执行董事"),
      speaker("Xi Chen", "Full Professor and Andre Meyer Faculty Fellow in the Department of Technology, Operations, and Statistics, New York University Stern School of Business", "陈溪", "纽约大学Stern商学院Andre Meyer冠名终身正教授"),
      speaker("Jeremy Huang", "Co-Founder, Daloopa", "黄捷", "Daloopa联合创始人"),
      speaker("Fred Ngan", "Co-Founder, Bowtie Life Insurance", "顏耀辉", "保泰人寿（Bowtie）联合创始人"),
      speaker("Yuechen Zhao", "Partner, Informed Ventures", "赵越臣", "Informed Ventures 合伙人"),
    ],
  },
  globalOutlook: {
    title: "Global Outlook for Next-Generation Business Leaders",
    titleZh: "新时代商业精英的全球视野",
    venueId: "science-d",
    description:
      "This Chinese-language panel focuses on what a global perspective now means for the next generation of business leaders. Founders, investors, and operators will discuss entrepreneurship, management, cross-border expansion, and the capabilities young leaders need to build durable companies in a more fragmented world.",
    descriptionZh:
      "这场中文论坛聚焦新一代商业领导者应如何建立真正的全球视野。嘉宾将围绕创业、管理、跨境扩张以及在更碎片化的世界中打造长期型企业所需的能力展开讨论。",
    speakers: [
      speaker("Ally Liu", "Moderator; Founder and CEO, Influcio Ai", "刘滢", "主持人；Influcio.ai 创始人、首席执行官"),
      speaker("Anna Danyi Chen", "Tentative; Founder and CEO, Novum Studio (Frog Social)", "陈丹怡", "待定；Novum Studio（Frog Social）创始人、首席执行官"),
      speaker("Fiona Fang", "Co-Founder, CGL Consulting", "方玲", "上海德筑企业管理有限公司CGL联合创始人"),
      speaker("Li Li", "Founding Partner, Next Capital", "李黎", "嘉程资本创始合伙人"),
      speaker("Miranda Wang", "China Managing Director, Project Management Institute", "王梦妍", "PMI中国区总裁"),
      speaker("Hongxu Yin", "Principal Research Scientist and Research Lead at NVIDIA", "尹洪旭", "英伟达首席研究科学家"),
    ],
  },
  economics: {
    title: "The Global Economy",
    titleZh: "全球经济",
    venueId: "science-b",
    description: `The United States and China remain deeply economically intertwined, even as industrial rivalry and political tension increasingly shape the terms of the relationship. Trade, finance, technology, investment, and regulation are no longer governed solely by market logic; they have become instruments through which both countries pursue resilience, security, and long-term competitive advantage. The central question is not whether interdependence will persist, but how it is being restructured.

Together, the panel will examine how U.S.-China interdependence is being renegotiated at a moment when both economies remain indispensable to one another, yet increasingly seek to reduce exposure to strategic risk. What forms of integration remain durable? Which sectors are most likely to fragment? And what does this evolving relationship reveal about the future of globalization, the limits of decoupling, and the political economy of economic coexistence.`,
    descriptionZh: `即便在国际局势充满不确定性的背景下，中美两国经济依然深度交融，产业竞争与政治张力正日益重塑双边关系的基本格局。贸易、金融、科技、投资与规制，已不再单纯遵循市场逻辑，而成为两国谋求经济韧性、战略安全与长期竞争优势的关键杠杆。当前的核心问题，已非相互依存是否仍将延续，而是这一相互依存正以何种方式被重新构建。

本场分论坛将聚焦中美两国在彼此仍互为重要依托的同时，如何逐步调整对战略风险的承受边界，重新协商双边经济关系的走向。嘉宾们将围绕以下问题展开深度对话：哪些领域的融合依然稳固？哪些行业最有可能走向分化？这一动态演进的双边关系，又将为全球化的未来、“脱钩” 的现实边界，以及经济共存的政治经济逻辑，提供怎样的启示？`,
    speakers: [
      speaker("Jason Furman", "Moderator; 28th Chairman, U.S. Council of Economic Advisers; Aetna Professor of the Practice of Economic Policy, Harvard University", "杰森·福尔曼", "主持人；美国经济顾问委员会前主席，哈佛大学Aetna经济政策实践教授"),
      speaker("Shenglin Ben", "Founding Dean, International Business School and Academy of Internet Finance, Zhejiang University; Former China CEO, JP Morgan Chase Bank", "贲圣林", "浙江大学国际联合商学院与金融科技研究院创始院长；摩根大通银行（中国）原行长"),
      speaker("Lei Huang", "CEO, Tiger Brokers US", "黄磊", "美国老虎证券公司首席执行官"),
      speaker("Yasheng Huang", "Professor of Global Economics and Management, MIT Sloan School of Management", "黄亚生", "麻省理工斯隆管理学院副院长、政治经济学教授"),
      speaker("Tao Zha", "Executive Director of the Center for Quantitative Economics, Federal Reserve Bank of Atlanta; Samuel Candler Dobbs Professor of Economics, Emory University", "查涛", "亚特兰大联邦储备银行数量经济研究中心执行主任，埃默里大学Samuel Candler Dobbs经济学讲席教授"),
    ],
  },
  softPower: {
    title: "Culture Going Global: Platform Logics and the Transformation of Soft Power",
    titleZh: "文化出海：平台逻辑如何改写软实力",
    venueId: "science-c",
    description: `From TikTok to Tencent Games, the global popularity of Chinese platforms raises a fundamental question: as China’s economic and infrastructural presence expands globally, does its cultural influence expand accordingly—and if so, through what strategies?

Paradoxically, the global success of these platforms does not primarily rest on exporting distinctly “Chinese” content. Instead, it facilitates an explosion of diverse, globalized content. This suggests a transformation in the logic of global cultural production. Within digital infrastructures, culture is filtered, curated, stylized, ranked, and circulated. This process fundamentally redefines what it means to produce “Chinese culture” in an era where narratives are fragmented, and cultural authority increasingly gives way to algorithmic visibility.

This panel examines four cases that represent distinct yet interconnected pathways of cultural globalization: short-form drama platforms (ReelShort), language pedagogy (Beijing Language and Culture University), transnational satellite television (SMG/Eastern TV), and cross-border e-commerce platforms (DHgate). Together, these cases reveal a shift from culturally specific, narrative-driven soft power toward hybrid configurations combining platform infrastructures, market logics, and algorithmic mediation.`,
    descriptionZh: `从TikTok与小红书，到Temu、Shein、ReelShort以及腾讯游戏，这些中国公司生产的平台与文化产品在全球的流行，引出了一个根本性问题：当中国的经济与基础设施影响力在全球扩张时，其文化影响力是否也随之扩展？如果是，其背后的策略是什么？

一个显而易见但又颇具悖论的现象是：这些平台的成功，并不依赖于输出“具有中国特色的内容”，反而推动了多元化、全球化内容的爆发。这表明，全球文化生产的逻辑正在发生转变。在数字基础设施中，文化被筛选、布置、风格化、排序并不断流通。这一过程从根本上重塑了“生产中国/中华文化”的含义：在叙事日益碎片化的同时，文化权威正在让位于算法所决定的可见性。

本论坛针对四个具有代表性的案例，呈现文化全球化不同但相互关联的路径：短剧平台（ReelShort）、语言教育（北京语言大学）、跨国电视媒体（东方卫视海外运营），以及跨境电商平台（敦煌网）。这些案例似乎共同揭示出一种转向：从以文化内容与价值为核心的软实力，转向由平台基础设施、市场逻辑与算法中介共同构成的混合形态。`,
    speakers: [
      speaker("Shih Diing Liu", "Moderator; Professor of Communications, University of Macau", "刘世鼎", "主持人；澳门大学传播系教授"),
      speaker("Annie Gong", "North America Marketing Lead, DHgate Group", "龚安妮", "敦煌网集团北美市场营销负责人"),
      speaker("Max Ren", "President, Eastern TV (US); Director, SMG North America", "任美星", "上海文化广播影视集团（SMG）东方卫视美国运营总监、美国东方广播影视公司总裁"),
      speaker("Baojun Zhang", "Vice President, Beijing Language and Culture University", "张宝钧", "北京语言大学副校长"),
      speaker("Zhilei Tong", "Founder, Chairman and CEO, COL Group", "童之磊", "中文在线创始人、董事长、首席执行官"),
    ],
  },
  consumer: {
    title: "Consumer Technologies",
    titleZh: "消费品与消费科技",
    venueId: "science-d",
    description: `The next chapter of consumer globalization will not be determined by capturing customers alone. It will be defined by whether companies can earn trust, build durable brands, and stay close to how people actually shop, eat, and pay across different markets. For founders and investors working across e-commerce, local commerce, fintech, and cross-border growth, the core challenge now is to build systems that can turn niche communities into lasting customer bases.

With leading professionals who have built businesses serving Asian and diaspora consumers in North America, this conversation looks at what it takes to scale a consumer company across borders today. The panel will examine where Chinese and Chinese founded consumer businesses are finding traction, how AI is changing merchandising and customer acquisition, and why categories such as food, everyday retail, and payments may offer a clearer path to durable growth than broad consumer marketplaces once did. The discussion will stay grounded in execution: what travels well, what must be rebuilt locally, and what separates a real consumer franchise from a short term growth story.`,
    descriptionZh: `消费全球化的未来将不再仅仅取决于企业能否获取客户。反之，其成败将定义于企业能否赢得信任、打造持久的品牌，并紧密贴近不同市场中人们真实的购物、饮食与支付方式。对于活跃于电子商务、本地生活服务、金融科技及跨境增长领域的创业者与投资者而言，当前的核心挑战在于构建一套系统，能够将小众社群转化为稳固的长期客户基础。

本场对话汇聚了在北美市场服务于亚裔及离散华人消费者的资深从业者，共同探讨当下跨地域扩张一家消费型企业的关键要素。嘉宾们将剖析中国背景及华人创立的消费企业在哪些领域正在取得突破，人工智能如何重塑选品与获客方式，以及为何食品、日常零售、支付等赛道，可能比曾经的综合性消费平台提供更清晰的持久增长路径。讨论将始终立足于执行层面：哪些经验可以跨市场迁移，哪些能力必须本土化重建，以及真正的消费领导品牌与短期增长故事之间的根本区别。`,
    speakers: [
      speaker("Jingjing Chai", "Moderator; General Partner, Taihill Venture; Co-Founder and CEO, Foundry BioSciences", "柴菁菁", "主持人；Taihill Venture 管理合伙人，Foundry BioSciences 联合创始人、首席执行官"),
      speaker("Eric Gao", "Founder and CEO, Malatown", "高阳", "Mala Town创始人、首席执行官"),
      speaker("Linxin Wen", "Co-Founder and CEO, Chowbus", "温林鑫", "Chowbus创始人、首席执行官"),
      speaker("Spencer Xu", "Founder and CEO, Snaplii; Founder and CEO, SnapPay", "Spencer Xu", "Snaplii创始人、首席执行官，SnapPay创始人、首席执行官"),
      speaker("Alex Zhou", "Founder and CEO, Yamibuy", "周游", "亚米网创始人、首席执行官"),
    ],
  },
} satisfies Record<string, PanelTrack>;
