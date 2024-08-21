window.onscroll = () => {
    if (scrollY >= calculation.offsetTop - 100) {
        if (!started) {
            counters.forEach(counter => {
                startCount(counter)
            }) 
        }
        started = true
    }
}
//