import OpenAi from 'openai';
let openAi: OpenAi;

export const generateArticle = async (title: string, description: string) => {

    const resultTime = 2000;

    if (!import.meta.env.VITE_OPEN_AI_KEY) {
        return new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve(`
### React Nima?
**React**  — bu **JavaScript kutubxonasi** bo‘lib, foydalanuvchi interfeyslarini yaratish uchun ishlatiladi. Uni **Meta (Facebook)** ishlab chiqqan va hozirda dunyodagi eng mashhur JavaScript kutubxonalaridan biridir Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ullamcorper justo quis porttitor. Proin in consectetur mauris, a sagittis augue. Integer orci nulla, ultrices vel velit nec, accumsan pulvinar felis. Donec nec cursus velit. In ultrices tellus ac vestibulum sollicitudin. Integer ultrices nulla in quam tempus, non malesuada ex pulvinar. .

                    `);
            }, resultTime)
        })
    }

    if (!openAi) {

        console.log('Init OpenAi');

        openAi = new OpenAi({

            apiKey: import.meta.env.VITE_OPEN_AI_KEY, dangerouslyAllowBrowser: true

        })

    }

    const result = await openAi.chat.completions.create({

        model: 'gpt-3.5-turbo',

        messages: [

            {

                role: 'system',

                content: 'You are a helpful assistant designed to assist users in creating engaging content, such as blogs, articles, or any written material.'

            },

            {

                role: 'user',

                content: `Please create an article based on the following information. Here is the list of information: \ntitle: ${title}

                \ndescription: ${description} Remember the post should be based one the information that I have mentioned above. Output should be Markdown text format strictly.`

            },

        ],

    });

    return result.choices[0].message.content;

}