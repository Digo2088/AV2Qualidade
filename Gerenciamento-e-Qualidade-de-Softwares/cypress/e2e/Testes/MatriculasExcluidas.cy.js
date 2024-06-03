describe('Consulta de Dados de Matrícula Excluída', () => {
  it('Deve retornar uma mensagem de erro ao informar um número de matrícula que foi excluída', () => {
  
    const numeroMatricula = '4653499';
  
    cy.request({
      method: 'GET',
      url: `http://localhost:8080/v1/matriculas/${numeroMatricula}`,
      headers: {
        'X-API-KEY': 'unime-qualidade-oficial2'
      },
      failOnStatusCode: false 
    }).then((response) => {
 
      expect(response.status).to.eq(404);
      
      
      expect(response.body).to.have.property('mensagem', 'A matrícula informada foi excluída de nossa base de dados!');
    });
  });
});
