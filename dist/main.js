"use strict";var _slicedToArray=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},skills=[["Project Management",8],["Process Improvement",8],["Entrepreneurship",10],["Strategic Planning",8],["Microsoft Excel",1],["Leadership",10],["Analysis",5],["Continuous Improvement",9],["Strategy",10],["Operations Management",7],["Proposal Writing",2],["Technical Writing",2],["Visio",1],["Contract Negotiation",1],["Product Development",7],["Web Design",5],["Systems Engineering",10],["Budgets",5],["Web Applications",4],["Management",9],["Lean Manufacturing",1],["System Design",6],["Simulations",6],["Business Process Mapping",3],["Start-ups",4],["Mobile Design",4],["Value Stream Mapping",3],["Innovative Thinking",3],["Front-end Development",2],["User Experience (UX)",2],["Rapid Prototyping",3],["Network Security",3],["Tools & Technologies",1],["ReactJS",1],["Node.js",1],["JavaScript",1],["JSON",1],["git",1],["Interpersonal Skills",1],["Team Management",1],["Cross-functional Team Leadership",1],["Team Leadership",3],["Engineering Management",3],["Team Building",1],["Continuous Integration and Continuous Delivery (CI/CD)",1],["DevOps",1],["Sprint Planning",1],["Elixir",1],["Software Architecture",5],["Rapid Application Development (RAD)",1],["Software Deployment",2],["Development Strategy",2]];Highcharts.chart("skills__cloud",{chart:{type:"wordcloud",backgroundColor:"transparent"},colors:["#F18432","#F28F3C","#F39B4A","#F4A659"],credits:{enabled:!1},title:{text:""},tooltip:{enabled:!1},plotOptions:{wordcloud:{minFontSize:10,maxFontSize:30,rotation:{from:-45,to:45,orientations:5}}},series:[{data:skills,name:"Skills"}]}),function(){var n=document.getElementById("anchor");function e(t){var e=document.getElementById(t);new IntersectionObserver(function(e){return function(e,t){e.isIntersecting&&(n.value="about"===t?"":t)}(_slicedToArray(e,1)[0],t)},{threshold:[.8]}).observe(e)}var t=!0,r=!1,i=void 0;try{for(var o,a=["about","recommendations","experience","skills"][Symbol.iterator]();!(t=(o=a.next()).done);t=!0){e(o.value)}}catch(e){r=!0,i=e}finally{try{!t&&a.return&&a.return()}finally{if(r)throw i}}}();