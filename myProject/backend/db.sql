CREATE SCHEMA `reactblog` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE `reactblog`.`admins` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(450) NOT NULL,
  `password` varchar(450) NOT NULL,
  `email` varchar(450) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3


CREATE TABLE `reactblog`.`products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nume_produs` varchar(200) NOT NULL,
  `descriere_produs` varchar(500) NOT NULL,
  `poza_url` varchar(500) NOT NULL,
  `categorie_produs` varchar(45) NOT NULL,
  `pret_produs` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb3

CREATE TABLE `reactblog`.`users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nume` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `prenume` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `parola` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `dataadaugare` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3