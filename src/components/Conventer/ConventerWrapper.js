import styled from "styled-components";

export const ConventerWrapper = styled.div`
  width: 800px;
  height: 400px;
  background-color: white;
  border-radius: 8px;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-width: 250px;
  h1 {
    margin: 2rem 0 5rem 0;
  }
  @media (max-width: 750px) {
    width: 90%;
  }
  @media (max-width: 350px) {
    height: 500px;
  }
`;
export const FormWrapper = styled.form`
  display: flex;
  width: 100%;
  height: 40%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;
export const FormMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 40%;
  align-items: center;
`;

export const CurrencySelect = styled.select`
  width: 50%;
  height: 40px;
  margin: 2%;
  border-radius: 0.5rem;
  background-color: #dce0e5;
  border: 1px solid #adb5bd;
  color: #495057;
  padding: 0.5rem;

  :focus {
    outline: 0.8px solid #495057;
  }
  @media (max-width: 450px) {
    width: 90%;
  }
`;
export const AmountInput = styled.input`
  width: 50%;
  height: 40px;
  margin: 2%;
  border-radius: 0.5rem;
  background-color: #dce0e5;
  border: 1px solid #adb5bd;
  color: #495057;
  padding: 0.5rem;

  :focus {
    outline: 0.8px solid #495057;
  }
  @media (max-width: 450px) {
    width: 90%;
  }
`;
export const ResultWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  height: 50%;
  align-items: center;
  @media (max-width: 350px) {
    width: 14rem;
    flex-direction: column;
  }
`;
export const Result = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 18px;
  font-weight: 100;
  color: #495057;

  p {
    font-size: 40px;
    color: black;
    display: flex;
    @media (max-width: 480px) {
      font-size: 25px;
    }
  }
`;
export const MessageWrapper = styled.h4`
  width: 100%;
  margin-top: 2rem;
  font-weight: 100;
  color: #0077b6;
  display: flex;
  justify-content: center;
  @media (max-width: 480px) {
    margin-top: 4rem;
  }
`;

export const SubmitButton = styled.button`
  background-color: #0077b6;
  border: none;
  width: 14rem;
  height: 4.5rem;
  cursor: pointer;
  color: white;
  font-size: 120%;
  margin: 0.5rem;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  :hover {
    background-color: #0085cc;
    transition: all 0.3s;
  }
  @media (max-width: 480px) {
    width: 10rem;
  }
  @media (max-width: 350px) {
    width: 14rem;
  }
`;
