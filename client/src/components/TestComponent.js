import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

export const TestComponent = () => {



    const twoPluses = (grid) => {
        let newGrid = grid.map(str => str.split('').map(char => char === 'G' ? true : false));
        let [rows, cols] = [newGrid.length, newGrid[0].length];
        let longest = [0, 0]
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (newGrid[r][c]) {
                    let size = 1;
                    while (true) {
                        try {
                            if (newGrid[r - size][c] &&
                                newGrid[r][c + size] &&
                                newGrid[r + size][c] &&
                                newGrid[r][c - size]) {
                                    size += 1;
                                } else {
                                    break;
                                }
                        } catch (err) {
                            break;
                        };
                    };
                    let area = size * 4 - 3;
                    if (area > longest[0]) {
                        longest.unshift(area);
                        longest.pop();
                    } else if (area > longest[1]) {
                        longest.pop();
                        longest.push(area);
                    };
                };
            };
        };
        return longest[0] * longest[1];
    };


    console.log(twoPluses([
        'BBGGGGBGBBG',
        'BBGGGGBGBBG',
        'BBGBBBBBBBG',
        'BBGGGGBBBBG',
        'BBGGGGBGBBG']));



    return (
        <Container>

            <Row>

                <Col>
                    { "Hello World" }
                </Col>

            </Row>

        </Container>
    );
};