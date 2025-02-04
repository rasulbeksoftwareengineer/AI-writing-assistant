import OpenAi from 'openai';
let openAi: OpenAi;

export const generateArticle = async (title: string, description: string) => {

    if (!import.meta.env.VITE_OPEN_AI_KEY) {
        return new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve(`
    An h1 header
    ============

    Paragraphs are separated by a blank line.

    2nd paragraph. *Italic*, **bold**, and \monospace\. Itemized lists
    look like:

    * this one
    * that one
    * the other one

    Note that --- not considering the asterisk --- the actual text
    content starts at 4-columns in.

    > Block quotes are
    > written like so.
    >
    > They can span multiple paragraphs,
    > if you like.

    Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
    in chapters 12--14"). Three dots ... will be converted to an ellipsis.
    Unicode is supported. ☺



    An h2 header
    ------------

    Here's a numbered list:

    1. first item
    2. second item
    3. third item

    Note again how the actual text starts at 4 columns in (4 characters
    from the left side). Here's a code sample:

        # Let me re-iterate ...
        for i in 1 .. 10 { do-something(i) }

    As you probably guessed, indented 4 spaces. By the way, instead of
    indenting the block, you can use delimited blocks, if you like:

    ~~~
    define foobar() {
        print "Welcome to flavor country!";
    }
    ~~~

    (which makes copying & pasting easier). You can optionally mark the
    delimited block for Pandoc to syntax highlight it:

    ~~~python
    import time
    # Quick, count to ten!
    for i in range(10):
        # (but not *too* quick)
        time.sleep(0.5)
        print i
    ~~~



    ### An h3 header ###

    Now a nested list:

    1. First, get these ingredients:

        * carrots
        * celery
        * lentils

    2. Boil some water.

    3. Dump everything in the pot and follow
        this algorithm:

            find wooden spoon
            uncover pot
            stir
            cover pot
            balance wooden spoon precariously on pot handle
            wait 10 minutes
            goto first step (or shut off burner when done)

        Do not bump wooden spoon or it will fall.

    Notice again how text always lines up on 4-space indents (including
    that last line which continues item 3 above).
                    `);
            }, 2000)
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