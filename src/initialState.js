const initState = {
    contact: {
        id: 'contact',
        heading: 'Contact',
        visible: true,
        photo: '',
        name: '1',
        occupation: 'Your Occupation',
        phone: '123-456-7890',
        email: '123@elegantresume.com',
        address: 'abc street, Toronto, ON, Can',
        website: 'www.yourwebsite.com',
        showIcon: true,
        contactInfo: '手机：1890538550 | 邮箱：1977403683@qq.com<br>男 | 居住地： 广州<br>求职意向：网易市场部实习生<br>',
        items: [
            {
                id: '1',
                field: 'phone',
                name: 'phone',
                visible: true,
            },
            {
                id: '2',
                field: 'email',
                name: 'email',
                visible: true,
            },
            {
                id: '3',
                field: 'address',
                name: 'address',
                visible: true,
            },
            {
                id: '4',
                field: 'website',
                name: 'website',
                visible: false,
            },
        ],
    },
    education: {
        id: 'education',
        heading: 'Education',
        visible: true,
        items: [
            {
                id: 'c42e2a5a-3f0d-497e-838b-ac2019dcf045',
                degree: 'Bachelor of Science in Computer Science',
                date: 'Start Date - End Date',
                startDate: 'Start Date',
                hideStartDate: true,
                endDate: 'End Date',
                institution: 'University of ABC',
                location: 'Toronto, ON',
                summaryVisibility: true,
                summary: '- Relevant Courses: 列举3-6门相关课程. \n- Honors & Awards: List your awards if neccessary.',
            },
            {
                id: 'c42e2a5a-3f0d-497e-838b-ac2019dcf049',
                degree: 'Master of Science in Computer Science',
                date: 'Start Date - End Date',
                startDate: 'Start Date',
                hideStartDate: true,
                endDate: 'End Date',
                institution: 'University of ABC',
                location: 'Toronto, ON',
                summaryVisibility: true,
                summary: '- Relevant Courses: List 3 - 6 courses if necessary. \n- Honors & Awards: List your awards if neccessary.',
            },
        ],
    },
    experience: {
        id: 'experience',
        heading: 'Experience',
        visible: true,
        items: [
            {
                id: 'd7c64937-0cb9-41b1-a3a6-0679c882fe63',
                jobTitle: 'Job Title',
                employer: 'Company name',
                location: 'Toronto, ON',
                date: 'Start Date - End Date',
                startDate: 'Start Date',
                endDate: 'End Date',
                jobDuties:
                    '<ul>\n  <li>Developed a two-stage pipeline to generate personalized Learning Paths (PLP) for 6 million weekly active LinkedIn Learning members according to industry, title transitions, and job views.</li>\n  <li>Designed customized graph generation and pruning algorithm with in-memory course transition matrix to construct PLPs using Scala Scalding.</li>\n  <li>Designed Hadoop workflow to trigger large-scale batch processing with high throughput on HDFS.</li>\n</ul>',
                website: 'https://abcdef.com',
            },
        ],
    },
    metadata: {
        language: '',
        templateLanguage: 'en',
        font: 'Noto Serif SC',
        fontSize: 13,
        fitToOnePage: true,
        fitToOnePageMargin: {
            mainSectionTopMargin: 10,
            subSectionTopMargin: 0,
        },
        paperSize: 'US Letter',
        layout: {
            fixedBlocks: [['profile', 'contact']],
            draggableBlocks: [['summary', 'skill', 'education', 'experience', 'project', 'academicExperience', 'awards']],
            // draggableBlocks: [['summary']],
        },
        // layout: {
        //     fixedBlocks: [['profile']],
        //     draggableBlocks: [
        //         ['contact', 'education', 'skill'],
        //         ['experience', 'project'],
        //     ],
        // },
        colors: {
            primary: '#000000',
            text: '#000000',
            background: '#FFFFFF',
        },
        showGrammarly: false,
    },
    project: {
        id: 'project',
        heading: 'Projects',
        visible: true,
        items: [
            {
                id: 'c768dcca-90f5-4242-a608-6759b4f667fa',
                fieldsVisibility: '{"subtitle":true,"date":true,"location":true}',
                title: 'Project Title',
                subtitle: 'Enter your project one-line summary here.',
                startDate: '2021.01',
                endDate: '2022.02',
                date: 'Start Date - End Date',
                location: 'Toronto, ON',
                institution: 'University of ABC',
                summary: '<ul><li>&nbsp;Provide&nbsp;details&nbsp;about&nbsp;</li></ul><p></p><ul><li>your&nbsp;project.</li></ul>',
            },
        ],
    },
    academicExperience: {
        id: 'academicExperience',
        heading: 'Academic Experience',
        visible: true,
        items: [
            {
                id: '1',
                title: 'Title',
                fieldsVisibility: '{"subtitle":false,"date":false,"location":false}',
                subtitle: 'Enter your project one-line summary here.',
                date: 'Start Date - End Date',
                startDate: 'Start Date',
                endDate: 'End Date',
                location: 'Toronto, ON',
                institution: 'University of ABC',
                summary: '<ul><li>&nbsp;Provide&nbsp;details&nbsp;about&nbsp;your&nbsp;academic experience.</li></ul>',
            },
        ],
    },
    summary: {
        id: 'summary',
        heading: 'Summary',
        visible: true,
        // body: 'test',
        body: 'Explain your qualification for the job in 1-3 sentences. Mention your current situation and years of experience and show recruiters how your skills will fit this position at the company you are applying for. Example: Energetic and passionate college student working towards a BS in Marketing at the University of Abcdef. Gained expertise in data analysis, publication marketing, web based advertising, and brand consulting. Aiming to use my knowledge of advertising, PR, product development, and consumer research strategies to satisfy the marketing internship at your company.',
    },
    skill: {
        id: 'skill',
        heading: 'Skills',
        visible: true,
        body: '<ul><li>Enter your skills here</li></ul>',
    },
    awards: {
        id: 'award',
        heading: 'Awards',
        visible: false,
        body: '',
    },
    userSettings: {
        id: 'userSettings',
        userLanguage: 'en',
        theme: '',
    },
};
const initStateZh = {
    contact: {
        id: 'contact',
        heading: '联系方式',
        visible: true,
        photo: '',
        name: '姓名',
        phone: '13012345678',
        email: '123@elegantresume.com',
        address: '广东省广州市',
        website: 'www.yourwebsite.com',
        birthDate: '2000.12',
        birthLocation: '北京',
        contactInfo: '手机：1890538550 | 邮箱：1977403683@qq.com<br>男 | 居住地： 广州<br>求职意向：网易市场部实习生<br>',

        items: [
            {
                id: '1',
                field: 'phone',
                name: '电话',
                visible: true,
            },
            {
                id: '2',
                field: 'email',
                name: '邮箱',
                visible: true,
            },
            {
                id: '3',
                field: 'address',
                name: '地址',
                visible: true,
            },
            {
                id: '4',
                field: 'website',
                name: '网站',
                visible: false,
            },
            {
                id: '5',
                field: 'birthDate',
                name: '生日',
                visible: false,
            },
            {
                id: '6',
                field: 'birthLocation',
                name: '籍贯',
                visible: false,
            },
        ],
    },
    summary: {
        id: 'summary',
        heading: '自我评价',
        visible: true,
        body: '结合岗位JD用1-3句话阐述自己的优势并突出自身技能与所应聘岗位的匹配度。总结你目前的情况、相关工作经验和突出成就，并用案例和数据展示你的能力和优势。',
    },
    experience: {
        id: 'experience',
        heading: '工作经历',
        visible: true,
        items: [
            {
                id: 'd7c64937-0cb9-41b1-a3a6-0679c882fe63',
                jobTitle: '职位名称',
                employer: '公司名字',
                location: '广东',
                date: '开始日期 - 结束日期',
                startDate: '开始日期',
                endDate: '结束日期',
                jobDuties:
                    '<ul class="editor-list-ul"><li value="1" class="editor-listitem ltr" dir="ltr"><span data-lexical-text="true">独立负责公司市场部共8名实习生的招聘录用，包括需求沟通，招聘宣传，组织笔试、面试，以及录用沟通。录用的实习生均获得部门好评并顺利完成实习。</span></li><li value="2" class="editor-listitem ltr" dir="ltr"><span data-lexical-text="true">在人力资源总监的领导下，主导公司2021年春季管培生校园招聘。组织两场线下校园宣讲会以及一场线上宣讲会，日均阅读100+简历，并组织约400名候选人进行笔试，对90余名候选人进行初面，组织3次10余人群面，最终协助挑选出合格的候选人。</span></li><li value="3" class="editor-listitem ltr" dir="ltr"><span data-lexical-text="true">参与全职员工社会招聘，与智联招聘、猎聘等多家平台沟通，日均沟通20余名潜在候选人，挑选合适候选人进行持续追踪，并在人才库记录详细信息，协助部门成功招募到合适人才。</span></li></ul>',
                website: 'https://abcdef.com',
            },
        ],
    },
    education: {
        id: 'education',
        heading: '教育背景',
        visible: true,
        items: [
            {
                id: 'c42e2a5a-3f0d-497e-838b-ac2019dcf045',
                degree: '计算机硕士',
                date: '入学日期 - 毕业日期',
                startDate: '入学日期',
                hideStartDate: true,
                endDate: '毕业日期',
                institution: '友友大学',
                location: '广州',
                summaryVisibility: true,

                summary: '- GPA：3.8/4.0（专业前10%）\n- 相关课程: 列举3-6门相关课程 \n- 获奖: 国家一等奖学金',
            },
            {
                id: 'c42e2a5a-3f0d-497e-838b-ac2019dcf049',
                degree: '计算机本科',
                date: '入学日期 - 毕业日期',
                startDate: '入学日期',
                endDate: '毕业日期',
                institution: '友友大学',
                location: '广州',
                summaryVisibility: true,

                summary: '- GPA：3.8/4.0（专业前10%）\n- 相关课程: 列举3-6门相关课程 \n- 获奖: 国家一等奖学金',
            },
        ],
    },
    project: {
        id: 'project',
        heading: '项目经历',
        visible: true,
        items: [
            {
                id: 'c768dcca-90f5-4242-a608-6759b4f667fa',
                title: '项目名称',
                subtitle: '项目描述',
                date: '开始日期 - 结束日期',
                location: '广州',
                institution: '友友大学',
                summary:
                    '<ul class="editor-list-ul"><li value="1" class="editor-listitem ltr" dir="ltr"><span data-lexical-text="true">独立负责公司市场部共8名实习生的招聘录用，包括需求沟通，招聘宣传，组织笔试、面试，以及录用沟通。录用的实习生均获得部门好评并顺利完成实习。</span></li><li value="2" class="editor-listitem ltr" dir="ltr"><span data-lexical-text="true">在人力资源总监的领导下，主导公司2021年春季管培生校园招聘。组织两场线下校园宣讲会以及一场线上宣讲会，日均阅读100+简历，并组织约400名候选人进行笔试，对90余名候选人进行初面，组织3次10余人群面，最终协助挑选出合格的候选人。</span></li><li value="3" class="editor-listitem ltr" dir="ltr"><span data-lexical-text="true">参与全职员工社会招聘，与智联招聘、猎聘等多家平台沟通，日均沟通20余名潜在候选人，挑选合适候选人进行持续追踪，并在人才库记录详细信息，协助部门成功招募到合适人才。</span></li></ul>',
            },
        ],
    },
    awards: {
        id: 'award',
        heading: '荣誉奖项',
        visible: false,
        body: '<ul> <li>描述获得奖项</li> </ul>',
    },
    certifications: {
        id: 'certifications',
        heading: 'Certifications',
        visible: true,
        items: [],
    },
    skill: {
        id: 'skill',
        heading: '技能证书',
        visible: true,
        body: '<ul><li>大学英语四级</li></ul>',
    },
    academicExperience: {
        id: 'academicExperience',
        heading: '校园经历',
        visible: true,
        items: [
            {
                id: '1',
                title: 'Title',
                fieldsVisibility: '{"subtitle":false,"date":false,"location":false}',
                subtitle: 'Enter your project one-line summary here.',
                date: 'Start Date - End Date',
                startDate: 'Start Date',

                endDate: 'End Date',
                location: 'Toronto, ON',
                institution: 'University of ABC',
                summary:
                    '<ul class="editor-list-ul"><li value="1" class="editor-listitem ltr" dir="ltr"><span data-lexical-text="true">独立负责公司市场部共8名实习生的招聘录用，包括需求沟通，招聘宣传，组织笔试、面试，以及录用沟通。录用的实习生均获得部门好评并顺利完成实习。</span></li><li value="2" class="editor-listitem ltr" dir="ltr"><span data-lexical-text="true">在人力资源总监的领导下，主导公司2021年春季管培生校园招聘。组织两场线下校园宣讲会以及一场线上宣讲会，日均阅读100+简历，并组织约400名候选人进行笔试，对90余名候选人进行初面，组织3次10余人群面，最终协助挑选出合格的候选人。</span></li><li value="3" class="editor-listitem ltr" dir="ltr"><span data-lexical-text="true">参与全职员工社会招聘，与智联招聘、猎聘等多家平台沟通，日均沟通20余名潜在候选人，挑选合适候选人进行持续追踪，并在人才库记录详细信息，协助部门成功招募到合适人才。</span></li></ul>',
            },
        ],
    },
    metadata: {
        id: 'metadata',
        language: '',
        template: '3',
        templateLanguage: 'zh',
        font: 'Lato',
        fontSize: 13,
        fitToOnePage: false,
        fitToOnePageMargin: {
            mainSectionTopMargin: 10,
            subSectionTopMargin: 0,
        },
        paperSize: 'US Letter',
        layout: {
            // fixedBlocks: [['profile', 'contact']],
            // draggableBlocks: [['summary', 'skill', 'education', 'experience', 'project', 'academicExperience', 'awards']],
            fixedBlocks: [['profile', 'contact']],
            draggableBlocks: [
                ['education', 'skill'],
                ['summary', 'experience', 'project', 'academicExperience'],
            ],
        },
        colors: {
            primary: '#000000',
            text: '#000000',
            background: '#FFFFFF',
        },
    },
    userSettings: {
        id: 'userSettings',
        userLanguage: 'zh',
        theme: '',
    },
    public: true,
};

export default { initState, initStateZh };
