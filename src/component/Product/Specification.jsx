import { Table, Row, Col} from 'react-bootstrap';
import "./Specification.css"


const specification = [
    {name:"wattage", value:220},
    {name:"acceleration", value:4.9},
    {name:"max_speed", value:250},
    {name:"fuel", value:50},
    {name:"CO2", value:5.6},
    {name:"price", value:5000}
]

export default function Specification(){
    return (
        <Row  className='m-3'>
            <h1>Thông số kĩ thuật</h1>
            <Row className='specification'>
                <Col lg='6' className='specification-img'>
                    <img className='w-100' src="https://porsche-vietnam.vn/wp-content/uploads/2018/07/model-718-cayman.png" alt="thông tin xe" />
                </Col>
                <Col lg='6'>
                    <Table striped bordered className='specification-table'>
                        {
                            specification.map(
                                object => (
                                            <tr>
                                                <th>{object.name}</th>
                                                <td>{object.value}</td>
                                            </tr>
                                        )
                            )

                        }
                    </Table>
                </Col>
            </Row>
        </Row>
    );
}