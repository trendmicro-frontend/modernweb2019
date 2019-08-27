import styled from 'styled-components';
import React from 'react';
import { Form, Field, FormSpy } from 'react-final-form';
import { Button } from './components/Buttons';
import { Input } from './components/FormControl';
import FormGroup from './components/FormGroup';
import { Container, Row, Col } from './components/GridSystem';
import HorizontalForm from './components/HorizontalForm';
import Label from './components/Label';

const required = value => (value ? undefined : 'Required field.')

const FinalFormTest = ({ fieldCount = 0, onSubmit }) => {
    const refCount = React.useRef(0);
    const keys = [...Array(fieldCount).keys()]
        .map(n => n + 1);

    return (
        <Container fluid style={{ padding: '1rem 1.5rem' }}>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, values }) => {
                    return (
                        <Row>
                            <Col style={{ paddingRight: '1rem' }}>
                                <h2>React Final Form Performance Optimization</h2>
                                <p>Click <strong>Reset</strong> and input something for the first 10 text fields (marked as required). Your goal is to minimze the form render count without exceeding 2 renders for a successful form submission. So each time you make change to a text field, it will not rerender the whole form on every change.</p>
                                <FormGroup>
                                    <strong>Form fields:</strong> {fieldCount}
                                </FormGroup>
                                <FormGroup>
                                    <strong>Form render count:</strong> {++refCount.current}
                                </FormGroup>
                                <FormGroup>
                                    <Button
                                        btnStyle="primary"
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </Button>
                                    <Button
                                        btnStyle="default"
                                        onClick={() => {
                                            form.reset();
                                            refCount.current = 0;
                                        }}
                                    >
                                        Reset
                                    </Button>
                                </FormGroup>
                                <FormSpy subscription={{ values: true }}>
                                    {({ values }) => (
                                        <Preview>{JSON.stringify(values, 0, 2)}</Preview>
                                    )}
                                </FormSpy>
                            </Col>
                            <Col style={{ maxHeight: 'calc(100vh - 2rem)', overflowY: 'auto' }}>
                                <HorizontalForm spacing={['.75rem', '.5rem']}>
                                    {({ FormContainer, FormRow, FormCol }) => (
                                        <FormContainer style={{ width: '100%' }}>
                                            {keys.map((key, index) => {
                                                const isRequiredField = (index < 10);
                                                const validate = isRequiredField ? required : null;
                                                const placeholder = isRequiredField ? 'Required field' : 'Optional field';
                                                
                                                return (
                                                    <Field
                                                        name={`field${key}`}
                                                        key={key}
                                                        validate={validate}
                                                    >
                                                        {({ input, meta }) => (
                                                            <FormRow>
                                                                <FormCol style={{ width: '1%', whiteSpace: 'nowrap' }}>
                                                                    <Label required={isRequiredField}>
                                                                        Field {key}
                                                                    </Label>
                                                                </FormCol>
                                                                <FormCol>
                                                                    <Input {...input} type="text" placeholder={placeholder} />
                                                                    {meta.error && meta.touched && <FieldError>{meta.error}</FieldError>}
                                                                </FormCol>
                                                            </FormRow>
                                                        )}
                                                    </Field>
                                                );
                                            })}
                                        </FormContainer>
                                    )}
                                </HorizontalForm>
                            </Col>
                        </Row>
                    );
                }}
            />
        </Container>
    );
};

export default FinalFormTest;

const FieldError = styled.div`
    color: #db3d44;
`;

const Preview = styled.pre`
    background-color: #f7f8f9;
    padding: .75rem 1rem;
`;
