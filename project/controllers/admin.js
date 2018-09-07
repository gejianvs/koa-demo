module.exports = {

    async adminPage ( ctx ) {
        const title = 'admin page'
        await ctx.render('admin', {
            title,
        })
    },

}