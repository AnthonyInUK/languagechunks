const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
async function insertData() {
    try {
        await prisma.languageChunk.createMany({
            data: [
                // 插入与 Job Interview 相关的短语
                { type: 'phrase', content: 'Tell me about yourself', translation: '请介绍一下你自己', topicId: '3b363a62-a91f-4294-a8a6-ecb8a827dca8' },
                { type: 'phrase', content: 'What are your strengths?', translation: '你的优点是什么？', topicId: '3b363a62-a91f-4294-a8a6-ecb8a827dca8' },
                { type: 'idiom', content: 'Break the ice', translation: '打破僵局', topicId: '3b363a62-a91f-4294-a8a6-ecb8a827dca8' },

                // 插入与 Project Management 相关的短语
                { type: 'phrase', content: 'Meet the deadline', translation: '按时完成任务', topicId: '7ba5c0f2-87a5-4be9-951c-7cb7092c39b1' },
                { type: 'phrase', content: 'Critical path', translation: '关键路径', topicId: '7ba5c0f2-87a5-4be9-951c-7cb7092c39b1' },
                { type: 'expression', content: 'On the same page', translation: '达成共识', topicId: '7ba5c0f2-87a5-4be9-951c-7cb7092c39b1' },

                // 插入与 Reports and Documentation 相关的短语
                { type: 'phrase', content: 'Attached is the document', translation: '附上的文件是', topicId: '3481073d-1b8c-403f-98db-d40a3f9b1375' },
                { type: 'idiom', content: 'Dot the i’s and cross the t’s', translation: '一丝不苟', topicId: '3481073d-1b8c-403f-98db-d40a3f9b1375' },

                // 插入与 Team Collaboration 相关的短语
                { type: 'phrase', content: 'Work together effectively', translation: '有效地一起工作', topicId: '015748ad-ef56-467d-a9b6-8318ab6eb483' },
                { type: 'phrase', content: 'Team spirit', translation: '团队精神', topicId: '015748ad-ef56-467d-a9b6-8318ab6eb483' },
                { type: 'idiom', content: 'Pull your weight', translation: '尽自己的本分', topicId: '015748ad-ef56-467d-a9b6-8318ab6eb483' },

                // 插入与 Networking 相关的短语
                { type: 'phrase', content: 'Build a network', translation: '建立人脉', topicId: '99b188b0-6e6c-49cb-b7ea-4d81e21db9a9' },
                { type: 'phrase', content: 'Follow up', translation: '跟进', topicId: '99b188b0-6e6c-49cb-b7ea-4d81e21db9a9' },
                { type: 'idiom', content: 'Get your foot in the door', translation: '获得机会进入某行业', topicId: '99b188b0-6e6c-49cb-b7ea-4d81e21db9a9' },

                // 插入与 Professional Development 相关的短语
                { type: 'phrase', content: 'Upskill yourself', translation: '提高自己的技能', topicId: 'dc099c4a-4eb6-48b1-afbd-7a96031370cc' },
                { type: 'phrase', content: 'Career growth', translation: '职业发展', topicId: 'dc099c4a-4eb6-48b1-afbd-7a96031370cc' },
                { type: 'expression', content: 'Take initiative', translation: '采取主动', topicId: 'dc099c4a-4eb6-48b1-afbd-7a96031370cc' },
            ],
        });
        //console.log('Language chunks inserted successfully');
    } catch (error) {
        //console.error('Error inserting language chunks:', error);
    } finally {
        await prisma.$disconnect();
    }
    insertData();
}

