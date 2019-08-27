import React from "react";
import styled from "styled-components";
import {
    Container,
    Row,
    Column,
    Heading,
    Text,
    Margin,
    Button,
    Form,
    Group,
    Label,
    Input,
    Select,
    TextArea,
} from "../components";

const Box = styled( Column )`
    color: ${ ( { theme } ) => theme.color.white };
    background-color: ${ ( { theme } ) => theme.color.primaryLight };
    border: ${ ( { theme } ) => `1px solid ${ theme.color.primary }` };
`;

export default () => (
    <Container>
        <Row>
            <Column xs={ 12 }>
                <Heading.H1>h1. Heading</Heading.H1>
                <Heading.H2>h2. Heading</Heading.H2>
                <Heading.H3>h3. Heading</Heading.H3>
                <Heading.H4>h4. Heading</Heading.H4>
                <Heading.H5>h5. Heading</Heading.H5>
                <Heading.H6>h6. Heading</Heading.H6>
                <Text.Paragraph>
                    <Text.Span bold>Lorem </Text.Span>
                    <Text.Span italic>ipsum </Text.Span>
                    dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar quis quam sit
                    amet feugiat. Curabitur magna massa, pellentesque eu dolor nec, cursus volutpat orci.
                    Aliquam ac enim metus. Nullam accumsan metus tincidunt neque volutpat venenatis.
                    Mauris ut lobortis purus, id aliquam mauris. Proin id
                    <Text.Span italic> ipsum </Text.Span>
                    facilisis, tincidunt neque
                    pellentesque, pulvinar ligula. Etiam accumsan et dolor sed euismod. Sed ac magna eget
                    purus sollicitudin blandit id sit amet justo. Etiam pulvinar sed dui sed pulvinar. Fusce
                    hendrerit magna in nibh dictum, sollicitudin pellentesque lectus blandit.
                </Text.Paragraph>
            </Column>
        </Row>
        <Row>
            <Column xs={ 12 }>
                <Margin top={ 2 } bottom={ 4 }>
                    <Button.Primary>Primary</Button.Primary>
                    <Button.Secondary>Secondary</Button.Secondary>
                    <Button.Tertiary>Tertiary</Button.Tertiary>
                </Margin>
            </Column>
        </Row>
        <Row>
            <Column xs={ 12 }>
                <Form>
                    <Group>
                        <Label>Name</Label>
                        <Input placeholder="Name" />
                    </Group>
                    <Group>
                        <Label>Select</Label>
                        <Select>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </Select>
                    </Group>
                    <Group>
                        <Label>TextArea</Label>
                        <TextArea />
                    </Group>
                    <Group>
                        <Button.Primary type="submit">Submit</Button.Primary>
                        <Button.Secondary type="reset">Reset</Button.Secondary>
                    </Group>
                </Form>
            </Column>
        </Row>
        <Row>
            <Box xs={ 12 } sm={ 12 }>12</Box>
            <Box xs={ 12 } sm={ 12 }>12</Box>
        </Row>
        <Row>
            <Box xs={ 12 } sm={ 11 }>11</Box>
            <Box xs={ 12 } sm={ 1 }>1</Box>
        </Row>
        <Row>
            <Box xs={ 12 } sm={ 10 }>10</Box>
            <Box xs={ 12 } sm={ 2 }>2</Box>
        </Row>
        <Row>
            <Box xs={ 12 } sm={ 9 }>9</Box>
            <Box xs={ 12 } sm={ 3 }>3</Box>
        </Row>
        <Row>
            <Box xs={ 12 } sm={ 8 }>8</Box>
            <Box xs={ 12 } sm={ 4 }>4</Box>
        </Row>
        <Row>
            <Box xs={ 12 } sm={ 7 }>7</Box>
            <Box xs={ 12 } sm={ 5 }>5</Box>
        </Row>
        <Row>
            <Box xs={ 12 } sm={ 6 }>6</Box>
            <Box xs={ 12 } sm={ 6 }>6</Box>
        </Row>
        <Row>
            <Box xs={ 12 } sm={ 5 }>5</Box>
            <Box xs={ 12 } sm={ 5 }>5</Box>
            <Box xs={ 12 } sm={ 2 }>2</Box>
        </Row>
        <Row>
            <Box xs={ 12 } sm={ 4 }>4</Box>
            <Box xs={ 12 } sm={ 4 }>4</Box>
            <Box xs={ 12 } sm={ 4 }>4</Box>
        </Row>
        <Row>
            <Box xs={ 12 } sm={ 3 }>3</Box>
            <Box xs={ 12 } sm={ 3 }>3</Box>
            <Box xs={ 12 } sm={ 3 }>3</Box>
            <Box xs={ 12 } sm={ 3 }>3</Box>
        </Row>
        <Row>
            <Box xs={ 12 } sm={ 2 }>2</Box>
            <Box xs={ 12 } sm={ 2 }>2</Box>
            <Box xs={ 12 } sm={ 2 }>2</Box>
            <Box xs={ 12 } sm={ 2 }>2</Box>
            <Box xs={ 12 } sm={ 2 }>2</Box>
            <Box xs={ 12 } sm={ 2 }>2</Box>
        </Row>
        <Row>
            <Box xs={ 12 } sm={ 1 }>1</Box>
            <Box xs={ 12 } sm={ 1 }>1</Box>
            <Box xs={ 12 } sm={ 1 }>1</Box>
            <Box xs={ 12 } sm={ 1 }>1</Box>
            <Box xs={ 12 } sm={ 1 }>1</Box>
            <Box xs={ 12 } sm={ 1 }>1</Box>
            <Box xs={ 12 } sm={ 1 }>1</Box>
            <Box xs={ 12 } sm={ 1 }>1</Box>
            <Box xs={ 12 } sm={ 1 }>1</Box>
            <Box xs={ 12 } sm={ 1 }>1</Box>
            <Box xs={ 12 } sm={ 1 }>1</Box>
            <Box xs={ 12 } sm={ 1 }>1</Box>
        </Row>
    </Container>
);
