var functions = {
  addEntry : function () {
    var newEntry = {};
    newEntry.name = this.name;
    newEntry.date = this.date;
    newEntry.value = parseFloat(this.value);
    newEntry.selected = false;
    this.entries.push(newEntry);
  },
  performSearch : function (query) {
    return query.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1;
  },
  numSelectedEntries : function () {
    return this.entries.filter((entry) => entry.selected).length;
  },
  sumValues : function () {
    this.result = 'Valor das seleções : ' + this.entries.filter((entry)   => entry.selected)
                                                        .map((entry)      => entry.value)
                                                        .reduce((e1,e2)   => e1 + e2);

  },
  getTotal : function() {
    this.result = 'Total da fatura : ' + this.entries.map((entry) => entry.value)
                                                     .reduce((v1,v2) => v1 + v2);
  },
  toggleAll : function () {
    this.entries.forEach((entry) => entry.selected = !this.universalCheckBox);
  }

}

var gerenciadorFatura = {
    searchQuery: '',
    name: 'Mercado',
    date: '08/08',
    value: 90,
    entries: [],
    result: 0,
    universalCheckBox: false
}


new Vue({
    el: '#app',
    data: gerenciadorFatura,
    methods : functions
})
