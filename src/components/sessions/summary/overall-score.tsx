import type { IOverallScore } from '@/data/types';

export const OverallScore = ({ label, category }: IOverallScore) => (
  <table
    style={{
      border: '1px solid #57A9FF',
      borderCollapse: 'collapse',
      padding: '1rem',
    }}
  >
    <tr>
      <th
        style={{
          border: '1px solid #57A9FF',
          backgroundColor: '#57A9FF',
          borderCollapse: 'collapse',
          padding: '1rem',
          textAlign: 'center',
        }}
      >
        <div>{label}</div>
        <br />
      </th>
    </tr>
    <tr>
      <td
        style={{
          border: '1px solid #57A9FF',
          backgroundColor: '#112161',
          padding: '1rem',
          textAlign: 'center',
        }}
      >
        <div>
          {category === 'Low' && <b style={{ color: '#36ffa1' }}>Low</b>}
          {category === 'Medium' && <b style={{ color: 'orange' }}>Medium</b>}
          {category === 'High' && <b style={{ color: 'red' }}>High</b>}
        </div>
      </td>
    </tr>
  </table>
);
