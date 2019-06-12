const skills = [
  ["Project Management", 8],
  ["Process Improvement", 8],
  ["Entrepreneurship", 7],
  ["Strategic Planning", 8],
  ["Microsoft Excel", 1],
  ["Leadership", 10],
  ["Analysis", 5],
  ["Continuous Improvement", 9],
  ["Strategy", 10],
  ["Operations Management", 7],
  ["Proposal Writing", 2],
  ["Technical Writing", 2],
  ["Visio", 1],
  ["Contract Negotiation", 1],
  ["Product Development", 7],
  ["Web Design", 5],
  ["Systems Engineering", 10],
  ["Budgets", 5],
  ["Web Applications", 4],
  ["Management", 9],
  ["Lean Manufacturing", 1],
  ["Continuous Integration and Continuous Delivery (CI/CD)", 1],
  ["System Design", 6],
  ["Simulations", 6],
  ["Business Process Mapping", 3],
  ["Start-ups", 4],
  ["Mobile Design", 4],
  ["Value Stream Mapping", 3],
  ["Innovative Thinking", 3],
  ["Front-end Development", 2],
  ["User Experience (UX)", 2],
  ["Rapid Prototyping", 3],
  ["Network Security", 3],
  ["ReactJS", 2],
  ["VueJS", 2],
  ["Node.js", 2],
  ["JavaScript", 2],
  ["JSON", 1],
  ["Python", 2],
  ["git", 1],
  ["Team Management", 1],
  ["Cross-functional Team Leadership", 1],
  ["Team Leadership", 4],
  ["Engineering Management", 3],
  ["Team Building", 1],
  ["DevOps", 1],
  ["Sprint Planning", 1],
  ["Elixir", 1],
  ["Software Architecture", 6],
  ["Rapid Application Development (RAD)", 1],
  ["Software Deployment", 2],
  ["Development Strategy", 2]
]

Highcharts.chart('skills__cloud', {
  chart: {
    type: 'wordcloud',
    backgroundColor: 'transparent'
  },
  colors: ['#F18432', '#F28F3C', '#F39B4A', '#F4A659'],
  credits: {
    enabled: false
  },
  title: {
    text: ''
  },
  tooltip: {
    enabled: false
  },
  plotOptions: {
    wordcloud: {
      minFontSize: 10,
      maxFontSize: 30,
      rotation: {
        from: -45,
        to: 45,
        orientations: 5
      },
      animation: {
        duration: 6000
      },
      enableMouseTracking: false
    }
  },
  series: [
    {
      data: skills,
      name: 'Skills'
    }
  ]
})
