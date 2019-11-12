<?php

	//Get requests
	if (isset($_GET['token']) || isset($_GET['username'])){
		$apiToken = isset($_GET['token']);
		$apiUsername = isset($_GET['username']);
	}

	//Post requests
	if (isset($_POST['name']) || isset($_POST['email']) || isset($_POST['url']) || isset($_POST['subject']) || isset($_POST['message'])){
		$apiName = isset($_GET['name']);
		$apiEmail = isset($_GET['email']);
		$apiUrl = isset($_GET['url']);
		$apiSubject = isset($_GET['subject']);
		$apiMessage = isset($_GET['message']);
	}

