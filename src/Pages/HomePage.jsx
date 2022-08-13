import React from "react";
import Validation from "../validate";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 40px auto;
  flex: 1;
  gap: 10px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 10px;
  width: 800px;
  @media (max-width: 450px) {
    width: 95%;

    flex: 1;
  }
`;
const InputElement = styled.div`
  display: flex;
  gap: 5px;
  @media (max-width: 450px) {
    display: flex;
    flex: 1;
  }
`;
const Label = styled.p`
  display: flex;
  padding: 5px;
  margin: 10px 0;
  text-align: right;
  flex: 2.5;
  @media (max-width: 450px) {
    display: flex;
    float: right;
    flex: 3;
  }
`;
const Select = styled.select`
  display: flex;
  flex: 6;
  height: 40px;
  border-radius: 4px;
  margin: 10px 0;
  padding: 5px;
  background-color: #f3f3f3;
  border: none;
  @media (max-width: 450px) {
    display: flex;

    flex: 5.5;
  }

  &:focus {
    outline: none;
    border: 0;
    border-bottom: 2px solid;
  }
  &:: 

  onChange={HandleChange} placeholder {
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    color: #bdbbb9;
  }
`;
const Input = styled.input`
  display: flex;
  flex: 6;
  height: 40px;
  border-radius: 4px;
  margin: 10px 0;
  padding: 5px;
  background-color: #f3f3f3;
  border: none;
  @media (max-width: 450px) {
    display: flex;

    flex: 5.5;
  }

  &:focus {
    outline: none;
    border: 0;
    border-bottom: 2px solid;
  }
  &:: 

  onChange={HandleChange} placeholder {
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    color: #bdbbb9;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 auto;
  flex: 1;
`;
const CreateButton = styled.button`
  flex: 3;
  margin: 10px 0;
  background-color: #6fa8dc;
  height: 40px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
`;
const CancelButton = styled.button`
  flex: 5;
  height: 40px;
  margin: 10px 0;
  background-color: #6fa8dc;
  border: none;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
`;

const Option = styled.option`
  height: 40px;
`;
const ErrorText = styled.p`
  color: red;
  margin: 0 auto;
  font-size: 12px;
  display: flex;
`;
const P = styled.p`
  display: flex;
  flex-wrap: wrap;
`;
export const Assignment1 = () => {
  const { handleChange, errors, handleSubmit } = Validation();

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <InputElement>
            <Label>Select your source : </Label>
            <Select type="select" name="source">
              <Option>Google Cloud Storage</Option>
              <Option>AWS S3</Option>
              <Option>Microsoft oneDrive</Option>
            </Select>
          </InputElement>{" "}
          {errors.source && <ErrorText>{errors.source}</ErrorText>}
          <InputElement>
            <Label>Provide a name for pipeline :</Label>
            <Input
              type="text"
              onChange={handleChange}
              name="pipeline"
              placeholder="e.g.,cust_shop_energy_gkateway001"
            />
          </InputElement>{" "}
          {errors.pipeline && <ErrorText>{errors.pipeline}</ErrorText>}
          <InputElement>
            <Label>GCS project name :</Label>
            <Input
              name="projectName"
              type="text"
              onChange={handleChange}
              placeholder="project-id"
            />
          </InputElement>{" "}
          {errors.projectName && <ErrorText>{errors.projectName}</ErrorText>}
          <InputElement>
            <Label>GCS bucket name :</Label>
            <Input
              name="bucketName"
              type="text"
              onChange={handleChange}
              placeholder="gs://your-bucket"
            />
          </InputElement>{" "}
          {errors.bucketName && <ErrorText>{errors.bucketName}</ErrorText>}
          <InputElement>
            <Label>Input Cloud Storage File(s) :</Label>
            <Input
              name="cloud"
              type="text"
              onChange={handleChange}
              placeholder="GCS location of your files"
            />
          </InputElement>{" "}
          {errors.cloud && <ErrorText>{errors.cloud}</ErrorText>}
          <InputElement>
            <Label>GCS credentials :</Label>
            <Input name="credentials" type="password" onChange={handleChange} />
          </InputElement>
          {errors.credentials && <ErrorText>{errors.credentials}</ErrorText>}
          <InputElement>
            <Label>Run Every :</Label>
            <Input
              name="run"
              type="text"
              onChange={handleChange}
              placeholder="(in minutes)"
            />
          </InputElement>
          {errors.run && <ErrorText>{errors.run}</ErrorText>}
          <InputElement>
            <ButtonSection>
              <CreateButton
                disabled={
                  (errors.source && true) ||
                  (errors.pipeline && true) ||
                  (errors.projectName && true) ||
                  (errors.bucketName && true) ||
                  (errors.cloud && true) ||
                  (errors.credentials && true) ||
                  (errors.run && true)
                }
              >
                Create
              </CreateButton>
              <CancelButton>Cancel</CancelButton>
            </ButtonSection>
          </InputElement>
        </Form>
      </Container>
      <P>
        Fully functional form with validation for given parameters. However I
        allowed '_' and '-' for naming as placeholder was showing to use them.
        These are intentionall left offs.Form will have disabled create button
        until all the field are filled accordind ro rules.
      </P>
      <P>
        I have used Styled components for this assigment. Link to test #2 is
        given below on this page.
      </P>
      <P>
        For assignment #2 I have used JSON in proper way as it comes when api
        fetchs it from data base . The content in table will automatically
        change when the JSON data is changed
      </P>
      <h1>Looking forward for your response :Mudasir Pandith</h1>
    </>
  );
};
