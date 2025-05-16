<?php
include 'db.php';

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'GET') {
    $stmt = $pdo->query("SELECT * FROM games");
    echo json_encode($stmt->fetchAll());
}

if ($method == 'POST') {
    if (isset($_FILES['image'])) {
        $imageName = time() . '_' . $_FILES['image']['name'];
        $imagePath = 'uploads/' . $imageName;
        move_uploaded_file($_FILES['image']['tmp_name'], $imagePath);
    } else {
        $imagePath = null;
    }

    $title = $_POST['title'];
    $description = $_POST['description'];
    $playstore_link = $_POST['playstore_link'];

    $sql = "INSERT INTO games (title, description, playstore_link, image) 
            VALUES (:title, :description, :playstore_link, :image)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':title' => $title,
        ':description' => $description,
        ':playstore_link' => $playstore_link,
        ':image' => $imagePath
    ]);

    echo json_encode(["message" => "Game added successfully"]);
}
?>
