describe('Consulta de Dados de Matrícula', () => {
    it('Deve retornar os dados de uma matrícula regular ao informar um número de matrícula válido e sem restrições', () => {
      
      const numeroMatricula = '4653421';
      
      cy.request({
        method: 'GET',
        url: `http://localhost:8080/v1/matriculas/${numeroMatricula}`,
        headers: {
          'X-API-KEY': 'unime-qualidade-oficial2'
        }
      }).then((response) => {
        
        expect(response.status).to.eq(200);
        
        
        expect(response.body).to.have.property('id').that.equals(numeroMatricula);
        expect(response.body).to.have.property('courseName');
        expect(response.body).to.have.property('tuition');
        expect(response.body.tuition).to.have.property('amount');
        expect(response.body.tuition).to.have.property('formattedAmount');
        expect(response.body.tuition).to.have.property('dueDate');
        expect(response.body.tuition).to.have.property('status');
        expect(response.body).to.have.property('student');
        expect(response.body.student).to.have.property('firstName');
        expect(response.body.student).to.have.property('lastName');
        expect(response.body.student).to.have.property('birthDate');
        expect(response.body.student).to.have.property('cpf');
        
      });
    });
  });
  
