import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';

function Competencies() {
    const competencies = ['Communication', 'Organization', 'Self-Starter', 'g']

    return (
        <Card border="light" bg="light" text="dark" margin="2" style={{ width: '18rem' }}>
            <Card.Header variant="dark" ><b>Competencies</b></Card.Header>
                <Card.Body>
                        {competencies.map(comp => (
                            <Stack direction="horizontal" gap={2}>
                                <div>
                                    <Badge bg="primary" text="light">{comp}</Badge>
                                </div>
                            </Stack >
                        ))}
                </Card.Body>
        </Card>
    );
}

export default Competencies;