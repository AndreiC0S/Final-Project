CREATE SCHEMA `project_schema` ;
ALTER SCHEMA `project_schema`  DEFAULT CHARACTER SET utf8  DEFAULT COLLATE utf8_general_ci ;

CREATE TABLE `project_schema`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nume_produs` VARCHAR(200) NOT NULL,
  `descriere_produs` VARCHAR(500) NOT NULL,
  `poza_url` VARCHAR(500) NOT NULL,
  `categorie_produs` VARCHAR(45) NOT NULL,
  `pret_produs` VARCHAR(45) NOT NULL,
  `all_products` VARCHAR(45) NOT NULL DEFAULT 'all',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);


CREATE TABLE `jsusers` (
  `id` int(10) UNSIGNED NOT NULL,
  `prenume` varchar(50) NOT NULL,
  `nume` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `datanastere` date NOT NULL,
  `telefon` char(10) NOT NULL,
  `dataadaugare` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `jsusers` (`id`, `prenume`, `nume`, `email`, `datanastere`, `telefon`, `dataadaugare`) VALUES
(1, 'Ion', 'Ionescu', 'ion@demo.com', '2022-05-01', '0723232323', '2022-05-24 10:59:59'),
(2, 'Dan', 'Dobrescu', 'dan@test.ro', '2022-05-09', '0754354323', '2022-05-24 10:59:59'),
(3, 'Ana', 'Popescu', 'ana@ana.com', '2022-05-11', '0788888434', '2022-05-24 11:01:44'),
(4, 'Vali', 'Vasilescu', 'vali@vali.eu', '2022-05-15', '0755553333', '2022-05-24 11:01:44');

ALTER TABLE `jsusers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_unic` (`email`);
ALTER TABLE `jsusers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;




CREATE TABLE `project_schema`.`admin_list` (
  `id_admin` INT NOT NULL AUTO_INCREMENT,
  `admin_nume` VARCHAR(45) NOT NULL,
  `admin_prenume` VARCHAR(45) NOT NULL,
  `admin_user` VARCHAR(45) NOT NULL,
  `admin_pass` VARCHAR(45) NOT NULL,
  `admin_make_admin` TINYINT NOT NULL DEFAULT 0,
  `admin_delete_post` TINYINT NOT NULL DEFAULT 0,
  `admin_add_post` TINYINT NOT NULL DEFAULT 0,
  `admin_edit_post` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id_admin`),
  UNIQUE INDEX `id_admin_UNIQUE` (`id_admin` ASC) VISIBLE,
  UNIQUE INDEX `admin_user_UNIQUE` (`admin_user` ASC) VISIBLE);


CREATE TABLE `project_schema`.`users_list` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `user_nume` VARCHAR(200) NOT NULL,
  `user_prenume` VARCHAR(200) NOT NULL,
  `user_email` VARCHAR(200) NOT NULL,
  `user_password` VARCHAR(200) NOT NULL,
  `user_data_nastere` DATE NOT NULL,
  `data_adaugare` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_user`),
  UNIQUE INDEX `user_email_UNIQUE` (`user_email` ASC) VISIBLE);
