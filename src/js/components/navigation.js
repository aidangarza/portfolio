(function () {
  if ('IntersectionObserver' in window) {
    const threshold = (document.body.clientWidth < 829) ? [0.25] : [0.8]
    const input = document.getElementById('anchor')
    const anchors = ['about', 'recommendations', 'experience', 'skills', 'interests']

    function handleIOChange (entry, anchor) {
      if (entry.isIntersecting) {
        // Set the value in the header input
        input.value = (anchor === 'about') ? ' M. Garza, Sr.' : `'s ${anchor}`
      }
    }

    for (let anchor of anchors) {
      const node = document.getElementById(anchor)
      const io = new IntersectionObserver(([entry]) => handleIOChange(entry, anchor), { threshold })

      io.observe(node)
    }
  }
})()
