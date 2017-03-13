<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="utf-8">
	<title>Calculo Basal</title>
	<link rel="stylesheet" type="text/css" href="_css/estilo.css">
</head>
<body>
	<div id="interface">
		<header id="cabecalho">
			<h1>CALCULADORA DE TAXA METABÓLICA BASAL</h1>
		</header>
		<aside id="borda-esquerda">
			<h2>BAIXO TEOR CALORICO</h2>
			<p>em 100 gramas</p>
			<img src="_imagens/acelga.jpg">
			<h3>
				Acelga<br/>
				25 Kcal
			</h3>
			<img src="_imagens/iogurte.jpg"/>
			<h3>
				Iogurte desnatado<br/>
				37 Kcal
			</h3>
			<img src="_imagens/abacaxi.jpg"/>
			<h3>
				Abacaxi<br/>
				50 Kcal
			</h3>
		</aside>
		<aside id="borda-direita">
			<h2>ALTO TEOR CALÓRICO</h2>
			<p>em 100 gramas</p>
			<img src="_imagens/arroz.jpg"/>
			<h3>
				Arroz integral<br/>
				350 Kcal
			</h3>
			<img src="_imagens/queijo.jpg"/>
			<h3>
				Queijo minas Fresco<br/>
				373kcal
			</h3>
			<img src="_imagens/avela.jpg"/>
			<h3>
				Avelã<br/>
				633 Kcal
			</h3>
		</aside>
		<div id="centro">
			<div id="calculo">
				<h2>Calculadora Basal</h2>

				<?php
					$sexo =0;
					$peso =0;
					$idade =0;
					$altura =0;
					$atividade_fisica =0;

				?>
				<form method="post" action="">
					<fieldset>
						<input type="radio" name="sexo" value="0" checked>masculino</input>
						<input type="radio" name="sexo" value="1">feminino</input>
					</fieldset>
					<p>Digite seu peso:<input type="text" name="peso"/></p>
					<p>Digite sua idade:<input type="text" name="idade"/></p>
					<p>Digite sua altura em centimentros:<input type="text" name="altura"/></p>
					<p>Digite seu grau de atividade fisica:<select type="text" name="atividade_fisica"/>
						<option name="sed" value="0">sedentario</option>
						<option name="lev" value="600">atividade leve 3xSem</option>
						<option name="mod" value="1000">atividade moderada 5xSem</option>
						<option name="pes" value="1200">atividade pesada 6xSem</option>
					</select></p>
					<p><input type="submit" name="Calcular" value="calcular"></p>
				</form>
				
				<?php
				$sexo = isset($_POST["sexo"])?$_POST["sexo"]:[""];
				$peso = isset($_POST["peso"])?$_POST["peso"]:[""];
				$idade = isset($_POST["idade"])?$_POST["idade"]:[""];
				$altura = isset($_POST["altura"])?$_POST["altura"]:[""]; 
				$atividade_fisica = isset($_POST["atividade_fisica"])?$_POST["atividade_fisica"]:[""];
				isset($manter);

				
				if($sexo == "0"){
					$manter = $atividade_fisica+ (66+($peso *13.7)+($altura * 5.0)-($idade* 6.8));
				}else{
					$manter = $atividade_fisica+ (665+($peso*9.6)+($altura*1.8)-($idade*4.7));
				}
				
				
				$emagrecer= $manter - 500;
				$engordar = $manter + 500;
				
				?>

			</div>

			<div id="resultado">
				<h2>Resultado:</h2>
				<p>quantidade de caloria para emagrecer:<?php echo "$emagrecer"; ?></p>
				<p>quantidade de caloria para manter o peso:<?php echo "$manter"; ?></p>
				<p>quantidade de caloria para engordar: <?php echo "$engordar"; ?></p>
			</div>
		</div>
	</div>
	<footer id="rodape">
		<p>Este site foi construido por <a href="https://github.com/felipegsantos15" target="_blank"><b>Felipe Gonçalves dos Santos</b></a></p>
	</footer>
</body>
</html>
