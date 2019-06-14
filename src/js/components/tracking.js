(function(){
  const trackables = document.querySelectorAll('a[target="_blank"]')

  trackables.forEach(node => {
    node.onclick = () => gtag('event', 'external_link', {
      event_category: 'Engagement',
      event_action: 'Clicked',
      event_label: node.href,
      value: node.dataset.value || 1
    })
  })
})()
