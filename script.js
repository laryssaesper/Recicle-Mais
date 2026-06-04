const Data = new Date();
const DataFormatada = Data.toISOString().split('T')[0];
document.getElementById('DataHoje').value = DataFormatada;