import { Info } from '@/data/types';
import styled from 'styled-components';
export const InfoSection = ({ label, data }: Info) => (
	<>
		<StyledTable>
			<colgroup>
				<col />
				<col />
			</colgroup>
			<thead>
				<tr>
					{label}
				</tr>
			</thead>
			<tbody>
				{data}
			</tbody>
		</StyledTable>
	</>

)

const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;

  td,
  th {
    border: none;
  }

  td {
    padding: 5px 10px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightpink;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
  }
`;
