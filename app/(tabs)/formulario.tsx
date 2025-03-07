import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { writeDataToExcel } from '../utils/excelUtils';


export default function FormularioScreen() {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    // Inscrição Cadastral
    setor: '',
    loteamento: '',
    quadra: '',
    lote: '',
    unidade: '',
    tipoManutencao: '',
    setorAnterior: '',
    loteamentoAnterior: '',
    quadraAnterior: '',
    loteAnterior: '',
    unidadeAnterior: '',

    // Endereço do Imóvel
    tipoLogradouro: '',
    logradouro: '',
    codigoLogradouro: '',
    numero: '',
    complemento: '',
    bairro: '',

    // Identificação do Proprietário
    nomeProprietario: '',
    enderecoCorrespondencia: '',
    cpf: '',
    cnpj: '',
    rgIe: '',
    sspSesdec: '',

    // Informação do Terreno
    topografia: '',
    nivel: '',
    pedologia: '',
    situacao: '',
    benfeitorias: '',
    zona: '',
    iluminacao: '',
    coletaLixo: '',
    pavimentacao: '',
    ocupacao: '',
    areaTerreno: '',
    frentePrincipal: '',
    fundos: '',
    direita: '',
    esquerda: '',
    observacoesTerreno: '',

    // Melhorias Públicas
    pavimentacaoPublica: '',
    redeAgua: '',
    redeEnergia: '',
    redeTelefonica: '',
    redeGaleriaPluvial: '',
    redeEsgotoSanitario: '',

    // Informação da Edificação
    estrutura: '',
    cobertura: '',
    paredes: '',
    piso: '',
    esquadrias: '',
    forro: '',
    revestimentoExterno: '',
    revestimentoInterno: '',
    pinturaExterna: '',
    pinturaInterna: '',
    cozinha: '',
    banheiros: '',
    instalacaoAgua: '',
    instalacaoEletrica: '',
    posicao: '',
    conservacaoEdificacao: '',
    caracterizacao: '',
    areaEdificada: '',

    // Situação Fundiária
    documentacaoImovel: '',
    titulado: '',
    processo: '',
    documentado: '',
    situacaoPosse: '',
    penhora: '',
    autoArresto: '',
    liberacaoArresto: '',

    // Observação
    observacao: '',
  });

  // Função para enviar o formulário
  const handleSubmit = async () => {
    try {
      // Escrever dados no Excel
      await writeDataToExcel(formData);

      // Gerar PDF (implemente essa função)
      // await generatePDF();

      // Limpar células após gerar o PDF
    

      console.log('Formulário enviado e células limpas!');
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Inscrição Cadastral */}
      <Text style={styles.sectionTitle}>Inscrição Cadastral</Text>
      <TextInput
        style={styles.input}
        placeholder="Setor"
        value={formData.setor}
        onChangeText={(text) => setFormData({ ...formData, setor: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Loteamento"
        value={formData.loteamento}
        onChangeText={(text) => setFormData({ ...formData, loteamento: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Quadra"
        value={formData.quadra}
        onChangeText={(text) => setFormData({ ...formData, quadra: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Lote"
        value={formData.lote}
        onChangeText={(text) => setFormData({ ...formData, lote: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Unidade"
        value={formData.unidade}
        onChangeText={(text) => setFormData({ ...formData, unidade: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo de Manutenção"
        value={formData.tipoManutencao}
        onChangeText={(text) => setFormData({ ...formData, tipoManutencao: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Setor Anterior"
        value={formData.setorAnterior}
        onChangeText={(text) => setFormData({ ...formData, setorAnterior: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Loteamento Anterior"
        value={formData.loteamentoAnterior}
        onChangeText={(text) => setFormData({ ...formData, loteamentoAnterior: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Quadra Anterior"
        value={formData.quadraAnterior}
        onChangeText={(text) => setFormData({ ...formData, quadraAnterior: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Lote Anterior"
        value={formData.loteAnterior}
        onChangeText={(text) => setFormData({ ...formData, loteAnterior: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Unidade Anterior"
        value={formData.unidadeAnterior}
        onChangeText={(text) => setFormData({ ...formData, unidadeAnterior: text })}
      />

      {/* Endereço do Imóvel */}
      <Text style={styles.sectionTitle}>Endereço do Imóvel</Text>
      <TextInput
        style={styles.input}
        placeholder="Tipo de Logradouro"
        value={formData.tipoLogradouro}
        onChangeText={(text) => setFormData({ ...formData, tipoLogradouro: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Logradouro"
        value={formData.logradouro}
        onChangeText={(text) => setFormData({ ...formData, logradouro: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Código do Logradouro"
        value={formData.codigoLogradouro}
        onChangeText={(text) => setFormData({ ...formData, codigoLogradouro: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Número"
        value={formData.numero}
        onChangeText={(text) => setFormData({ ...formData, numero: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Complemento"
        value={formData.complemento}
        onChangeText={(text) => setFormData({ ...formData, complemento: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Bairro"
        value={formData.bairro}
        onChangeText={(text) => setFormData({ ...formData, bairro: text })}
      />

      {/* Identificação do Proprietário */}
      <Text style={styles.sectionTitle}>Identificação do Proprietário</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Proprietário"
        value={formData.nomeProprietario}
        onChangeText={(text) => setFormData({ ...formData, nomeProprietario: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço para Correspondência"
        value={formData.enderecoCorrespondencia}
        onChangeText={(text) => setFormData({ ...formData, enderecoCorrespondencia: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={formData.cpf}
        onChangeText={(text) => setFormData({ ...formData, cpf: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="CNPJ"
        value={formData.cnpj}
        onChangeText={(text) => setFormData({ ...formData, cnpj: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="RG/I.E N°"
        value={formData.rgIe}
        onChangeText={(text) => setFormData({ ...formData, rgIe: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="SSP/SESDEC"
        value={formData.sspSesdec}
        onChangeText={(text) => setFormData({ ...formData, sspSesdec: text })}
      />
      {/* Seção Informação do Terreno */}
      <Text style={styles.sectionTitle}>Informação do Terreno</Text>
      <TextInput
        style={styles.input}
        placeholder="Topografia"
        value={formData.topografia}
        onChangeText={(text) => setFormData({ ...formData, topografia: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Nível"
        value={formData.nivel}
        onChangeText={(text) => setFormData({ ...formData, nivel: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Pedologia"
        value={formData.pedologia}
        onChangeText={(text) => setFormData({ ...formData, pedologia: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Situação"
        value={formData.situacao}
        onChangeText={(text) => setFormData({ ...formData, situacao: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Benfeitorias"
        value={formData.benfeitorias}
        onChangeText={(text) => setFormData({ ...formData, benfeitorias: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Zona"
        value={formData.zona}
        onChangeText={(text) => setFormData({ ...formData, zona: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Iluminação"
        value={formData.iluminacao}
        onChangeText={(text) => setFormData({ ...formData, iluminacao: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Coleta de Lixo"
        value={formData.coletaLixo}
        onChangeText={(text) => setFormData({ ...formData, coletaLixo: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Pavimentação"
        value={formData.pavimentacao}
        onChangeText={(text) => setFormData({ ...formData, pavimentacao: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Ocupação"
        value={formData.ocupacao}
        onChangeText={(text) => setFormData({ ...formData, ocupacao: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Área do Terreno"
        value={formData.areaTerreno}
        onChangeText={(text) => setFormData({ ...formData, areaTerreno: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Frente Principal"
        value={formData.frentePrincipal}
        onChangeText={(text) => setFormData({ ...formData, frentePrincipal: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Fundos"
        value={formData.fundos}
        onChangeText={(text) => setFormData({ ...formData, fundos: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Direita"
        value={formData.direita}
        onChangeText={(text) => setFormData({ ...formData, direita: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Esquerda"
        value={formData.esquerda}
        onChangeText={(text) => setFormData({ ...formData, esquerda: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Observações do Terreno"
        value={formData.observacoesTerreno}
        onChangeText={(text) => setFormData({ ...formData, observacoesTerreno: text })}
      />

{/* Seção Informação da Edificação */}
<Text style={styles.sectionTitle}>Informação da Edificação</Text>
      <TextInput
        style={styles.input}
        placeholder="Estrutura"
        value={formData.estrutura}
        onChangeText={(text) => setFormData({ ...formData, estrutura: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Cobertura"
        value={formData.cobertura}
        onChangeText={(text) => setFormData({ ...formData, cobertura: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Paredes"
        value={formData.paredes}
        onChangeText={(text) => setFormData({ ...formData, paredes: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Piso"
        value={formData.piso}
        onChangeText={(text) => setFormData({ ...formData, piso: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Esquadrias"
        value={formData.esquadrias}
        onChangeText={(text) => setFormData({ ...formData, esquadrias: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Forro"
        value={formData.forro}
        onChangeText={(text) => setFormData({ ...formData, forro: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Revestimento Externo"
        value={formData.revestimentoExterno}
        onChangeText={(text) => setFormData({ ...formData, revestimentoExterno: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Revestimento Interno"
        value={formData.revestimentoInterno}
        onChangeText={(text) => setFormData({ ...formData, revestimentoInterno: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Pintura Externa"
        value={formData.pinturaExterna}
        onChangeText={(text) => setFormData({ ...formData, pinturaExterna: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Pintura Interna"
        value={formData.pinturaInterna}
        onChangeText={(text) => setFormData({ ...formData, pinturaInterna: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Cozinha"
        value={formData.cozinha}
        onChangeText={(text) => setFormData({ ...formData, cozinha: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Banheiros"
        value={formData.banheiros}
        onChangeText={(text) => setFormData({ ...formData, banheiros: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Instalação de Água"
        value={formData.instalacaoAgua}
        onChangeText={(text) => setFormData({ ...formData, instalacaoAgua: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Instalação Elétrica"
        value={formData.instalacaoEletrica}
        onChangeText={(text) => setFormData({ ...formData, instalacaoEletrica: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Posição"
        value={formData.posicao}
        onChangeText={(text) => setFormData({ ...formData, posicao: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Conservação da Edificação"
        value={formData.conservacaoEdificacao}
        onChangeText={(text) => setFormData({ ...formData, conservacaoEdificacao: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Caracterização"
        value={formData.caracterizacao}
        onChangeText={(text) => setFormData({ ...formData, caracterizacao: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Área Edificada"
        value={formData.areaEdificada}
        onChangeText={(text) => setFormData({ ...formData, areaEdificada: text })}
      />
      {/* Seção Situação Fundiária */}
      <Text style={styles.sectionTitle}>Situação Fundiária</Text>
      <TextInput
        style={styles.input}
        placeholder="Documentação do Imóvel"
        value={formData.documentacaoImovel}
        onChangeText={(text) => setFormData({ ...formData, documentacaoImovel: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Titulado"
        value={formData.titulado}
        onChangeText={(text) => setFormData({ ...formData, titulado: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Processo"
        value={formData.processo}
        onChangeText={(text) => setFormData({ ...formData, processo: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Documentado"
        value={formData.documentado}
        onChangeText={(text) => setFormData({ ...formData, documentado: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Situação da Posse"
        value={formData.situacaoPosse}
        onChangeText={(text) => setFormData({ ...formData, situacaoPosse: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Penhora"
        value={formData.penhora}
        onChangeText={(text) => setFormData({ ...formData, penhora: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Auto de Arresto"
        value={formData.autoArresto}
        onChangeText={(text) => setFormData({ ...formData, autoArresto: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Liberação de Arresto"
        value={formData.liberacaoArresto}
        onChangeText={(text) => setFormData({ ...formData, liberacaoArresto: text })}
      />

       {/* Seção Observações */}
      <Text style={styles.sectionTitle}>Observações</Text>
      <TextInput
        style={[styles.input]}
        placeholder="Digite suas observações..."
        value={formData.observacao}
        onChangeText={(text) => setFormData({ ...formData, observacao: text })}
        multiline
        numberOfLines={4}
      />


      {/* Botão de Enviar */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

