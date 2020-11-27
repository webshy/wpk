import { helloworld } from './hellowrold';
// import { echartsful } from './echartsful.min'
document.write(helloworld)
// document.write(echartsful)
// import { echarts } from 'echarts'
var echarts = require('echarts')
var myChart = echarts.init(document.getElementById('chart'));

// 使用刚指定的配置项和数据显示图表。
// myChart.setOption(option);
myChart.setOption( {

  title: {
    text: '',
    left: 'center'
  },

  tooltip: {
    formatter: function (info) {
      var value = info.value;
      var treePathInfo = info.treePathInfo;
      var treePath = [];

      for (var i = 1; i < treePathInfo.length; i++) {
        treePath.push(treePathInfo[i].name);
      }

      return [
        '<div class="tooltip-title">' + formatUtil.encodeHTML(treePath.join('/')) + '</div>',
        // 'Disk Usage: ' + formatUtil.addCommas(value) + ' KB',
      ].join('');
    }
  },

  // color: ['#ffffff', "#ffffff"],
  // color:['purple'],


  series: [
    {
      name: 'GAP Progress Overview',
      type: 'treemap',
      visibleMin: 300,
      label: {
        show: true,
        // color: '#000',
        // 文字颜色
        color: '#fff',
        formatter: '{b}'
      },
      upperLabel: {
        show: true,
        color: '#fff',
        height: 20
      },
      itemStyle: {
        borderColor: '#fff',
      },
      levels: getLevelOption(),
      data: [{
        name: '硬件层',            // Second tree
        value: 10,
        // itemStyle: {
        //   "normal": {
        //     "color": "red",
        //   }
        // },
        children: [{
          name: '绘制墙体',       // Son of first tree
          value: 20,
        }, {
          name: '墙体倒角',       // Second leaf of first tree
          value: 6
        }, {
          name: '墙体连接',       // Second leaf of first tree
          value: 6
        }, {
          name: '墙体打断',       // Second leaf of first tree
          value: 6
        }, {
          name: '饰面创建',       // Second leaf of first tree
          value: 6
        }, {
          name: '墙体附着',       // Second leaf of first tree
          value: 6
        }, {
          name: '墙体分离',       // Second leaf of first tree
          value: 6
        }]
      }, {
        name: '系统层',            // Second tree
        value: 7,
        children: [{
          name: '绘制幕墙',       // Son of first tree
          value: 20,
        }, {
          name: '幕墙网格',       // Second leaf of first tree
          value: 6
        }, {
          name: '幕墙竖梃',       // Second leaf of first tree
          value: 6
        }]
      }, {
        name: '服务层',            // Second tree
        value: 8,
        children: [{
          name: 'Apache Tomcat',       // Son of first tree
          value: 20,
        }, {
          name: 'Apache',       // Second leaf of first tree
          value: 6
        }, {
          name: 'rdp',       // Second leaf of first tree
          value: 6
        }, {
          name: 'Microsoft Windows netbios-ssn',       // Second leaf of first tree
          value: 6
        }, {
          name: 'Apache Jserv',       // Second leaf of first tree
          value: 6
        }, {
          name: 'Microsoft ftpd',       // Second leaf of first tree
          value: 6
        }, {
          name: 'SQL Server',       // Second leaf of first tree
          value: 6
        }]
      }, {
        name: '支撑层',            // Second tree
        value: 6,
        children: [{
          name: '绘制楼板',       // Son of first tree
          value: 20,
        }, {
          name: '楼板编辑',       // Second leaf of first tree
          value: 6
        }, {
          name: '楼板分割',       // Second leaf of first tree
          value: 6
        }, {
          name: '楼板合并',       // Second leaf of first tree
          value: 6
        }, {
          name: '楼板升降',       // Second leaf of first tree
          value: 6
        }]
      }, {
        name: '应用层',            // Second tree
        value: 3,
        children: [{
          name: 'Vue.js',       // Son of first tree
          value: 20,
        }, {
          name: 'webpack',       // Second leaf of first tree
          value: 6
        }, {
          name: 'Zone.js',       // Second leaf of first tree
          value: 6
        }, {
          name: 'http',       // Second leaf of first tree
          value: 6
        }, {
          name: 'OpenRASP',       // Second leaf of first tree
          value: 6
        }, {
          name: 'Nginx',       // Second leaf of first tree
          value: 6
        }]
      }]
    }
  ]
});
// function colorMappingChange(value) {
//   var levelOption = getLevelOption(value);
//   chart.setOption({
//     series: [{
//       levels: levelOption
//     }]
//   });
// }

var formatUtil = echarts.format;

function getLevelOption() {
  return [
    {
      itemStyle: {
        borderColor: '#777',
        borderWidth: 0,
        gapWidth: 1
      },
      upperLabel: {
        show: false
      }
    },
    {
      itemStyle: {
        borderColor: '#555555',
        borderWidth: 3,
        gapWidth: 1
      },
      emphasis: {
        itemStyle: {
          borderColor: '#ddd'
        }
      }
    },
    {
      colorSaturation: [0.35, 0.5],
      itemStyle: {
        borderWidth: 2,
        gapWidth: 1,
        borderColorSaturation: 0.3
      }
    }
  ];
}

window.addEventListener("resize", function () {
  setTimeout(() => {
    myChart.resize();
  }, 1000)
});