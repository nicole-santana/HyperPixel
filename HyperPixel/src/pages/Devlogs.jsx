import { useState } from "react";
import Card from "../Components/Card";
import imgThemes from "../data/themeImg";
import img from "/assets/img/home/corvo-home/corvo-windows.png";

// Group your articles by folder (example)
const devlogFolders = [
	{
		label: "Projetos",
		articles: [
			{ title: "Como nasceu o Bla Bla Project", url: "/articles/bla-bla-project" },
			{ title: "Devlog #2 - Corrigindo bugs chatos", url: "/articles/bug-fix" },
		],
	},
	{
		label: "Sistema",
		articles: [
			{ title: "Devlog #3 - Novo sistema de inventário", url: "/articles/inventory-system" },
			{ title: "Devlog #4 - Design repensado", url: "/articles/design" },
		],
	},
	// ...add more folders as needed
];

export default function Devlogs({ theme }) {
	const [openFolders, setOpenFolders] = useState([]);

	const toggleFolder = (idx) => {
		setOpenFolders((prev) =>
			prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
		);
	};

	return (
		<div id="Devlogs">
			<div id="PrimeiraParte">
				<div>
					<Card width={24.6875} height={28.8125} img={img} />
					<h2>Bla Bla project 1</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint animi
						officiis excepturi quae. Numquam delectus facere ducimus veniam,
						architecto iste facilis laborum, quibusdam sequi ipsum minima ex sit
						voluptatibus deleniti?
					</p>
					<a href="" className="VerMais">
						&gt;&gt;Veja mais
					</a>
				</div>
				<div>
					<Card width={24.6875} height={28.8125} img={img} />
					<h2>Bla Bla project 1</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint animi
						officiis excepturi quae. Numquam delectus facere ducimus veniam,
						architecto iste facilis laborum, quibusdam sequi ipsum minima ex sit
						voluptatibus deleniti?
					</p>
					<a href="" className="VerMais">
						&gt;&gt;Veja mais
					</a>
				</div>
				<div>
					<Card width={24.6875} height={28.8125} img={img} />
					<h2>Bla Bla project 1</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint animi
						officiis excepturi quae. Numquam delectus facere ducimus veniam,
						architecto iste facilis laborum, quibusdam sequi ipsum minima ex sit
						voluptatibus deleniti?
					</p>
					<a href="" className="VerMais">
						&gt;&gt;Veja mais
					</a>
				</div>
			</div>

			<div id="Estrelas1">
				<img id="Direita" src={imgThemes[theme].estrelaDDevlogs} alt="" />
				<img id="Esquerda" src={imgThemes[theme].estrelaEDevlogs} alt="" />
			</div>

			<div id="SegundaParte">
				<h3>Mais Devlogs</h3>
				
				<div id="MaisDevlogs">

					<img
					id="EstrelaMaisDevlogs"
					src={imgThemes[theme].estrelaMaisDevlogs}
					alt=""
				/>
					{devlogFolders.map((folder, idx) => (
						<div key={idx} style={{ breakInside: "avoid", marginBottom: "1rem" }}>
							<button
								style={{
									background: "none",
									border: "none",
									color: "inherit",
									cursor: "pointer",
									font: "inherit",
									padding: 0,
									textAlign: "left",
								}}
								onClick={() => toggleFolder(idx)}
							>
							 {folder.label} 	&#62;&#62;
							</button>
							{openFolders.includes(idx) && (
								<ul
									style={{
										margin: "0.5rem 0 0 1.5rem",
										padding: 0,
									
									}}
								>
									{folder.articles.map((art, i) => (
										<li key={i} style={{ marginBottom: "0.25rem" }}>
											<a href={art.url}>{art.title}</a>
										</li>
									))}
								</ul>
							)}
						</div>
					))}
				</div>
				
			</div>
		</div>
	);
}
