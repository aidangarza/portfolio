(function () {
  const input = document.getElementById('anchor')
  const anchors = ['about', 'recommendations', 'experience', 'skills']

  function handleIOChange (entry, anchor) {
    if (entry.isIntersecting) {
      input.value = (anchor === 'about') ? '' : `'s ${anchor}`
    }
  }

  for (let anchor of anchors) {
    const node = document.getElementById(anchor)
    const io = new IntersectionObserver(([entry]) => handleIOChange(entry, anchor), { threshold: [0.8] })

    io.observe(node)
  }
})()
