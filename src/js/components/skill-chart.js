const skills = [
  ['Process Improvement', 53],
  ['Project Management', 54],
  ['Entrepreneurship', 46],
  ['Strategic Planning', 31],
  ['Continuous Improvement', 15],
  ['Proposal Writing', 13],
  ['Analysis', 16],
  ['Operations Management', 14],
  ['Technical Writing', 13],
  ['Product Development', 11],
  ['Strategy', 15],
  ['Web Design', 9],
  ['Systems Engineering', 9],
  ['Budgets', 9],
  ['Web Applications', 9],
  ['Lean Manufacturing', 7],
  ['System Design', 6],
  ['Simulations', 6],
  ['Business Process Mapping', 6],
  ['Start-ups', 4],
  ['Value Stream Mapping', 3],
  ['Front-end Development', 1],
  ['User Experience (UX)', 1],
  ['Rapid Prototyping', 1],
  ['Network Security', 1],
  ['Tools & Technologies', 1],
  ['Microsoft Excel', 23],
  ['Visio', 13],
  ['ReactJS', 1],
  ['Node.js', 1],
  ['JavaScript', 1],
  ['JSON', 1],
  ['git', 1],
  ['Interpersonal Skills', 1],
  ['Leadership', 22],
  ['Contract Negotiation', 12],
  ['Management', 8],
  ['Team Management', 1],
  ['Cross-functional Team Leadership', 1],
  ['Team Leadership', 1],
  ['Engineering Management', 1],
  ['Team Building', 1],
  ['Other Skills  ', 1],
  ['Mobile Design', 4],
  ['Innovative Thinking', 3],
  ['Continuous Integration and Continuous Delivery (CI/CD)', 1],
  ['DevOps', 1],
  ['Sprint Planning', 1],
  ['Elixir', 1],
  ['Software Architecture', 1],
  ['Rapid Application Development (RAD)', 1],
  ['Software Deployment', 1],
  ['Development Strategy', 1]
]

Highcharts.chart('skills__cloud', {
  chart: {
    type: 'wordcloud',
    backgroundColor: 'transparent'
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
      }
    }
  },
  series: [
    {
      data: skills,
      name: 'Skills'
    }
  ]
})
