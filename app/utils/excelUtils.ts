import * as FileSystem from 'expo-file-system';
import * as XLSX from 'xlsx';

// Mapeamento dos campos do formulário para as células do Excel
const cellMapping = {
  // Inscrição Cadastral
  setor: 'C7',
  loteamento: 'D7',
  quadra: 'G7',
  lote: 'I7',
  unidade: 'K7',
  tipoManutencao: 'Q7',
  setorAnterior: 'S7',
  loteamentoAnterior: 'U7',
  quadraAnterior: 'Z7',
  loteAnterior: 'AB7',
  unidadeAnterior: 'AE7',

  // Endereço do Imóvel
  tipoLogradouro: 'C10',
  logradouro: 'E10',
  codigoLogradouro: 'C12',
  numero: 'J12',
  complemento: 'O12',
  bairro: 'Z12',

  // Identificação do Proprietário
  nomeProprietario: 'J14',
  enderecoCorrespondencia: 'J15',
  cpf: 'C17',
  cnpj: 'J17',
  rgIe: 'T17',
  sspSesdec: 'AD17',

  // Informação do Terreno
  topografia: 'F27',
  nivel: 'J27',
  pedologia: 'N27',
  situacao: 'T27',
  benfeitorias: 'AC27',
  zona: 'AG27',
  iluminacao: 'E40',
  coletaLixo: 'I40',
  pavimentacao: 'O40',
  ocupacao: 'Y40',
  areaTerreno: 'AE30',
  frentePrincipal: 'AE32',
  fundos: 'AE34',
  direita: 'AE36',
  esquerda: 'AE38',
  observacoesTerreno: 'AA39',

  // Melhorias Públicas
  pavimentacaoPublica: 'E42',
  redeAgua: 'V42',
  redeEnergia: 'E43',
  redeTelefonica: 'W43',
  redeGaleriaPluvial: 'I44',
  redeEsgotoSanitario: 'Y44',

  // Informação da Edificação
  estrutura: 'F57',
  cobertura: 'J57',
  paredes: 'N57',
  piso: 'T57',
  esquadrias: 'AB57',
  forro: 'AG57',
  revestimentoExterno: 'F66',
  revestimentoInterno: 'J66',
  pinturaExterna: 'N66',
  pinturaInterna: 'T66',
  cozinha: 'AB66',
  banheiros: 'AG66',
  instalacaoAgua: 'F77',
  instalacaoEletrica: 'J77',
  posicao: 'N77',
  conservacaoEdificacao: 'T77',
  caracterizacao: 'AB77',
  areaEdificada: 'AE74',

  // Situação Fundiária
  documentacaoImovel: 'N88',
  titulado: 'K81',
  processo: 'K82',
  documentado: 'K83',
  situacaoPosse: 'AG88',
  penhora: 'AC81',
  autoArresto: 'AC83',
  liberacaoArresto: 'AC85',
  
  //Observação
  observacao: 'E90',
};

// Função para escrever dados no Excel
export const writeDataToExcel = async (formData: any) => {
  try {
    // Caminho do arquivo Excel
    const fileUri = FileSystem.bundleDirectory + 'assets/BCI.xlsx';

    // Ler o arquivo como binário
    const file = await FileSystem.readAsStringAsync(fileUri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    // Converter o arquivo para um workbook
    const workbook = XLSX.read(file, { type: 'base64' });

    // Acessar a planilha "BCI - Frente"
    const sheetName = workbook.SheetNames.find((name) => name === 'BCI - Frente');
    if (sheetName) {
      const worksheet = workbook.Sheets[sheetName];

      // Escrever dados nas células mapeadas
      for (const [field, cell] of Object.entries(cellMapping)) {
        if (formData[field]) {
          worksheet[cell] = { v: formData[field] }; // Escreve o valor na célula
        }
      }

      // Converter o workbook de volta para base64
      const updatedFile = XLSX.write(workbook, { type: 'base64' });

      // Salvar o arquivo atualizado
      await FileSystem.writeAsStringAsync(fileUri, updatedFile, {
        encoding: FileSystem.EncodingType.Base64,
      });

      console.log('Dados escritos com sucesso!');
    }
  } catch (error) {
    console.error('Erro ao escrever no arquivo Excel:', error);
  }
};

// Função para limpar células após gerar o PDF
export const clearCells = async () => {
  try {
    const fileUri = FileSystem.bundleDirectory + 'assets/BCI.xlsx';
    const file = await FileSystem.readAsStringAsync(fileUri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    const workbook = XLSX.read(file, { type: 'base64' });
    const sheetName = workbook.SheetNames.find((name) => name === 'BCI - Frente');
    if (sheetName) {
      const worksheet = workbook.Sheets[sheetName];
      for (const cell of Object.values(cellMapping)) {
        delete worksheet[cell];
      }
      const updatedFile = XLSX.write(workbook, { type: 'base64' });
      await FileSystem.writeAsStringAsync(fileUri, updatedFile, {
        encoding: FileSystem.EncodingType.Base64,
      });
      console.log('Células limpas com sucesso!');
    }
  } catch (error) {
    console.error('Erro ao limpar células:', error);
  }
};