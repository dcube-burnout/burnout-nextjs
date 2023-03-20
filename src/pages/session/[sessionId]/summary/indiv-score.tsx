import { IIndivScore } from "@/data/types";

export const IndivScore = ({ label, numeric, category }: IIndivScore) => (
	<table style={{
		border: "1px solid #57A9FF",
		borderCollapse: "collapse",
		padding: "1rem",
	}}>
		<tr>
			<th style={{
				border: "1px solid #57A9FF",
				backgroundColor: "#57A9FF",
				borderCollapse: "collapse",
				padding: "1rem",
				textAlign: "center",
			}}>
				{label}
			</th>
			<th style={{
				border: "1px solid #57A9FF",
				backgroundColor: "#57A9FF",
			}}></th>
		</tr>
		<tr>
			<td style={{
				border: "1px solid #57A9FF",
				backgroundColor: "#112161",
				padding: "1rem",
				textAlign: "center",
			}}>
				Total Score<br />
				<b>
					{numeric}
				</b>
			</td>
			<td style={{
				border: "1px solid #57A9FF",
				backgroundColor: "#112161",
				padding: "1rem",
				textAlign: "center",
			}}>
				Signs of Burnout<br />

				{category === "Low" && <b style={{ color: "#36ffa1" }}>Low</b>}
				{category === "Medium" && <b style={{ color: "orange" }}>Medium</b>}
				{category === "High" && <b style={{ color: "red" }}>High</b>}
			</td>
		</tr>
	</table>
);