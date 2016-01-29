<?php
	//Get paramter
	$q = $_REQUEST["q"];
	
	echo exec('/execute/SudokuSolver/ssapp ' . $q);
?>