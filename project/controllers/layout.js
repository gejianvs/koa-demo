module.exports = {

    async layoutPage ( ctx ) {
        const title = 'layout page'
        await ctx.render('layout', {
            title,
        })
    },

}