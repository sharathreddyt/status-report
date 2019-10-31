// playground requires you to assign document definition to a variable called dd

var dd = {
  header: {
    text: 'JAVEN',
    alignment: 'left'
  },
  footer: function(currentPage, pageCount) {
    return {
      columns: [
        {
          text: currentPage.toString() + ' of ' + pageCount,
          alignment: 'center'
        }
      ]
    };
  },
  content: [
    {
      style: 'header',
      text: 'weekly status report',
      alignment: 'center'
    },
    {
      style: 'tableExample',
      table: {
        heights: 20,
        widths: [250, 250],
        body: [['employee', 'sharath chandra theegulla'], ['client', 'optum']]
      }
    }
  ],
  styles: {
    header: {
      fontSize: 28,
      bold: true,
      margin: [0, 0, 0, 40],
      color: 'red'
    },
    subheader: {
      fontSize: 16,
      bold: true,
      margin: [0, 10, 0, 5]
    },
    tableExample: {
      margin: [0, 5, 0, 15],
      height: 80
    },
    tableHeader: {
      bold: true,
      fontSize: 13,
      color: 'black'
    }
  },
  defaultStyle: {
    // alignment: 'justify'
  }
};
