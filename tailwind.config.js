module.exports = {
    theme : {
        extends: {
            keyframes : {
                bop : {
                    '0%' : {transform : 'translateY(0)'},
                    '100%' : {transform : 'translateY(-10px)'}
                },
            },
            animations : {
                bop : 'bop 1s ease-in-out infinite alternate',
            },
        },
    },
}
