<?php
if (isset($_POST['nom']) && isset($_POST['email']) && isset($_POST['message'])) {
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $telephone = isset($_POST['telephone']) ? $_POST['telephone'] : '';
    $message = $_POST['message'];
    $fichier = isset($_POST['fichier']) ? $_POST['fichier'] : '';

    $destinataire = 'emmanuellegerme8@gmail.com';
    $sujet = 'Nouveau message depuis le formulaire de contact';
    $contenu = "Nom: $nom\n";
    $contenu .= "Email: $email\n";
    $contenu .= "Téléphone: $telephone\n";
    $contenu .= "Message: $message\n";

    $entetes = "From: $nom <$email>\r\n";
    if (!empty($fichier)) {
        $fichier_temporaire = $_FILES['fichier']['tmp_name'];
        $nom_fichier = $_FILES['fichier']['name'];
        $pieces = pathinfo($nom_fichier);
        $extension = $pieces['extension'];
        $fichier_destination = 'chemin/vers/dossier/' . uniqid() . '.' . $extension;
        move_uploaded_file($fichier_temporaire, $fichier_destination);
        $contenu .= "Fichier joint: $fichier_destination\n";
    }

    $envoi = mail($destinataire, $sujet, $contenu, $entetes);

    if ($envoi) {
        echo "Merci, votre message a été envoyé.";
    } else {
        echo "Désolé, une erreur s'est produite lors de l'envoi du message.";
    }
}
?>
