import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';


function TechSkills() {
    const technologies = ['SQL', 'ArcGISOnlinne', 'QGIS', 'React.js', 'Java', 'Git']

    return (
        <Card border="light" bg="light" text="dark" style={{ width: '18rem' }}>
            <Card.Header variant="dark" ><b>Tech Skills</b></Card.Header>
                <Card.Body>
                        {technologies.map(tech => (
                            <Stack direction="horizontal" gap={2}>
                                <div>
                                    <Badge bg="primary" text="light">{tech}</Badge>
                                </div>
                            </Stack >
                        ))}
                </Card.Body>
        </Card>
    );
}

export default TechSkills;