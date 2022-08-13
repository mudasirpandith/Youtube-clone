import React from "react";
import styled from "styled-components";
import data from "../data";
const Container = styled.div``;
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  cellspacing: 0;
  cellpadding: 0;
`;
const Th = styled.th`
  border: 1px solid;
  font-size: 10px;
  color: #969a9c;
  padding: 10px 0;
  verticalalign: top;
`;
const Td = styled.td`
  color: grey;
  padding: 5px 0;
  border: 1px solid;
`;
const Tr = styled.tr`
  border: 1px solid;
 
`;
export const Assignment2 = () => {
  return (
    <Container>
      <h2>Equipment-wise details</h2>
      <Table>
        <thead>
          <Tr>
            <Th rowSpan="2">MACHINE NAME</Th>
            <Th rowSpan="2">MACHINE ID</Th>
            <Th colSpan="3">ENERGY COMSUMED (kWh)</Th>
            <Th rowSpan="2">Active power(MW)</Th>
            <Th rowSpan="2">Passive power(MVA)</Th>
            <Th rowSpan="2">Reactive power(MVAr)</Th>
            <Th rowSpan="2">Current(Amps)</Th>
            <Th rowSpan="2">Voltage(V)</Th>
            <Th rowSpan="2">Power Factor</Th>
            <Th colSpan="3">IDLE TIME</Th>
          </Tr>
          <Tr>
            <Td>Today</Td>
            <Td>MTD</Td>
            <Td>YTD</Td>
            <Td>Today</Td>
            <Td>MTD</Td>
            <Td>YTD</Td>
          </Tr>
        </thead>
        <tbody>
          {data.map((d) => {
            return (
              <>
                <Tr>
                  <Td>{d.machine_name}</Td>
                  <Td>{d.machine_id}</Td>
                  <Td>{d.daily_energy}</Td>
                  <Td>{d.monthly_energy}</Td>
                  <Td>{d.yearly_energy}</Td>
                  <Td>{d.active_power}</Td>
                  <Td>{d.apparent_power}</Td>
                  <Td>{d.reactive_power}</Td>
                  <Td>{d.current}</Td>
                  <Td>{d.voltage}</Td>
                  <Td>{d.power_factor}</Td>
                  <Td>{d.idle_daily}</Td>
                  <Td>{d.idle_monthly}</Td>
                  <Td>{d.idle_yearly}</Td>
                </Tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
