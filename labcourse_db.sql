 create database labcourse_db
use labcourse_db

create table patients(
	id int identity (1,1),
	name varchar(255) not null,
	lastname varchar(255) not null,
	birthday varchar(255),
	phone varchar(255),
	email varchar(255) not null,
	password varchar(255) not null,
	logkey char (3),
	diagnoseid int,
	doctorid int,
	nurseid int,
	appointmentid int,
)
select * from patients
create table doctors(
	id int identity (1,1),
	name varchar(255) not null,
	lastname varchar(255) not null,
	birthday varchar(255),
	phone varchar(255),
	email varchar(255) not null,
	password varchar(255) not null,
	logkey char (3)
)


create table nurses(
	id int identity (1,1),
	name varchar(255) not null,
	lastname varchar(255) not null,
	birthday varchar(255),
	phone varchar(255),
	email varchar(255) not null,
	password varchar(255) not null,
	logkey char (3)
)


create table appointments(
	appointmentid int identity (1,1),
	username varchar(255) ,
	uselastname varchar(255) ,
	userphone varchar(255) ,
	useremail varchar(255) ,
	appointmentdate date ,
	textmessage varchar(255),
	departmentid varchar(255),
	doctorid varchar (255)
)

select * from appointments

insert into appointments (username, uselastname, userphone, useremail, appointmentdate, textmessage, departmentid, doctorid) values ('Marco', 'Castanho', '983-788-9374', 'mbysouth0@miitbeian.gov.cn', '8/20/2020', null, 'Nurology', 'Bysouth');
insert into appointments (username, uselastname, userphone, useremail, appointmentdate, textmessage, departmentid, doctorid) values ('Dinnie', 'Ruckhard', '271-408-9135', 'ddunster1@seattletimes.com', '1/29/2021', null, 'Cardiology', 'Dunster');
insert into appointments (username, uselastname, userphone, useremail, appointmentdate, textmessage, departmentid, doctorid) values ('Kenon', 'Kevis', '206-106-7389', 'kmcilmurray2@jigsy.com', '9/24/2020', null, 'Nurology', 'McIlmurray');
insert into appointments (username, uselastname, userphone, useremail, appointmentdate, textmessage, departmentid, doctorid) values ('Marina', 'Cristofano', '969-464-0128', 'mkinton3@disqus.com', '5/17/2021', null, 'Cardiology', 'Kinton');
insert into appointments (username, uselastname, userphone, useremail, appointmentdate, textmessage, departmentid, doctorid) values ('Albrecht', 'Gartsyde', '985-977-6472', 'agorden4@taobao.com', '1/20/2021', null, 'Nurology', 'Gorden');
insert into appointments (username, uselastname, userphone, useremail, appointmentdate, textmessage, departmentid, doctorid) values ('Renaud', 'Hosier', '940-274-1984', 'rforlonge5@seesaa.net', '9/12/2020', null, 'Cardiology', 'Forlonge');
insert into appointments (username, uselastname, userphone, useremail, appointmentdate, textmessage, departmentid, doctorid) values ('Uta', 'Penberthy', '980-934-1507', 'uvernazza6@technorati.com', '3/2/2021', null, 'Nurology', 'Vernazza');
insert into appointments (username, uselastname, userphone, useremail, appointmentdate, textmessage, departmentid, doctorid) values ('Ninetta', 'Casillis', '401-825-5066', 'nhould7@skyrock.com', '6/4/2020', null, 'Cardiology', 'Hould');
insert into appointments (username, uselastname, userphone, useremail, appointmentdate, textmessage, departmentid, doctorid) values ('Taffy', 'Glenwright', '279-439-4851', 'tlyptratt8@pinterest.com', '11/19/2020', null, 'Cardiology', 'Lyptratt');

create table fatura (
faturaid int identity (1,1),
vizita varchar (255),
totali varchar (255),
pacientiname varchar (255),
pacientilastname varchar (255)
)


insert into fatura (vizita, totali, pacientiname, pacientilastname) values ('Kontrolla', 49.15, 'Norris', 'Meriott');
insert into fatura (vizita, totali, pacientiname, pacientilastname) values ('Kontrolla', 15.89, 'Cortie', 'Winston');
insert into fatura (vizita, totali, pacientiname, pacientilastname) values ('Trajtim', 44.73, 'Shaine', 'Goodere');
insert into fatura (vizita, totali, pacientiname, pacientilastname) values ('Kontrolla', 24.75, 'Michaela', 'Eccleshall');
insert into fatura (vizita, totali, pacientiname, pacientilastname) values ('Trajtim', 19.31, 'Simone', 'Bottrell');
insert into fatura (vizita, totali, pacientiname, pacientilastname) values ('Kontrolla', 32.44, 'Tudor', 'Vears');
insert into fatura (vizita, totali, pacientiname, pacientilastname) values ('Trajtim', 47.38, 'Herminia', 'Marshalleck');
insert into fatura (vizita, totali, pacientiname, pacientilastname) values ('Kontrolla', 10.42, 'Mavra', 'Duddan');
insert into fatura (vizita, totali, pacientiname, pacientilastname) values ('Trajtim', 29.0, 'Sallee', 'Fulleylove');
insert into fatura (vizita, totali, pacientiname, pacientilastname) values ('Kontrolla', 33.66, 'Rosalinde', 'Graal');

 

create table medikamentet(
medikamentiid int identity (1,1),
emri varchar (255),
doktoriname varchar (255),
doktorilastname varchar (255),
cmimi varchar (255)
)


insert into medikamentet (emri, doktoriname, doktorilastname, cmimi) values ('Fluorouracil', 'Claude', 'Garnsworth', 46.51);
insert into medikamentet (emri, doktoriname, doktorilastname, cmimi) values ('Pure Ivory Skin Defense Makeup SPF 15', 'Fairleigh', 'Molines', 35.35);
insert into medikamentet (emri, doktoriname, doktorilastname, cmimi) values ('lansoprazole', 'Pieter', 'Orris', 33.74);
insert into medikamentet (emri, doktoriname, doktorilastname, cmimi) values ('Migraine Headache Therapy', 'Callida', 'Fellman', 47.69);
insert into medikamentet (emri, doktoriname, doktorilastname, cmimi) values ('Bermuda Grass Smut', 'Roseline', 'Oakhill', 48.84);
insert into medikamentet (emri, doktoriname, doktorilastname, cmimi) values ('VioNex', 'Glenn', 'Hedylstone', 42.48);
insert into medikamentet (emri, doktoriname, doktorilastname, cmimi) values ('rexall hemorrhoidal', 'Garvey', 'Tomenson', 10.89);
insert into medikamentet (emri, doktoriname, doktorilastname, cmimi) values ('Lovastatin', 'Avis', 'Gyenes', 40.8);
insert into medikamentet (emri, doktoriname, doktorilastname, cmimi) values ('Family Dollar', 'Abeu', 'Lilbourne', 21.83);
insert into medikamentet (emri, doktoriname, doktorilastname, cmimi) values ('Fungustat', 'Robenia', 'Malenoir', 40.23);

select * from medikamentet

create table diets(
	dietid int identity (1,1),
	diettype varchar(255),
	startdate varchar (255) ,
	enddate varchar(255) 
)


insert into diets(diettype,startdate,enddate) values ('Maintain Weight','05-12-2020','15-01-2021')


create table Ambullanca(
AmbullancaId int identity (1,1),
Targat varchar (255),
VozitesiName varchar (255),
VozitesiLastname varchar (255)
)



insert into Ambullanca (Targat, VozitesiName, VozitesiLastname) values ('589-638-3079', 'Wilfrid', 'Anderl');
insert into Ambullanca (Targat, VozitesiName, VozitesiLastname) values ('528-451-1488', 'Bentlee', 'Soanes');
insert into Ambullanca (Targat, VozitesiName, VozitesiLastname) values ('118-583-1367', 'Allx', 'Nettleship');
insert into Ambullanca (Targat, VozitesiName, VozitesiLastname) values ('190-497-8222', 'Tatiania', 'Scantlebury');
insert into Ambullanca (Targat, VozitesiName, VozitesiLastname) values ('652-404-4954', 'Letitia', 'Nowill');
insert into Ambullanca (Targat, VozitesiName, VozitesiLastname) values ('409-906-7321', 'Silvain', 'Chuck');
insert into Ambullanca (Targat, VozitesiName, VozitesiLastname) values ('708-607-4579', 'Mercy', 'Flawith');
insert into Ambullanca (Targat, VozitesiName, VozitesiLastname) values ('367-599-5213', 'Aloysia', 'Nelmes');
insert into Ambullanca (Targat, VozitesiName, VozitesiLastname) values ('388-642-8004', 'Ambur', 'Grafom');
insert into Ambullanca (Targat, VozitesiName, VozitesiLastname) values ('634-912-5890', 'Hubey', 'Flott');

select * from doctors

create table diagnoses(
    patientsname varchar (255) not null,
	diagnoseid int identity (1,1),
	diagnosename varchar (255) not null,
	diagnosedescription varchar (255),
	nursesname varchar (255) not null,
	doctorsname varchar (255) not null
)

insert into diagnoses values('Jonida Gashi','Diabet','Mase me e madhe sesa qe duhet e sheqerit ne trup','Albiona Bahtiri','Filan Fisteku')
select * from diagnoses


select * from doctors

insert into doctors (name, lastname, birthday, phone, email, password, logkey) values ('Nerita', 'Paradise', '6/3/1985', '592-619-3514', 'nparadise0@icq.com', 4541876, 293);
insert into doctors (name, lastname, birthday, phone, email, password, logkey) values ('Anabelle', 'Rittelmeyer', '12/28/1973', '673-873-1611', 'arittelmeyer1@google.pl', 2892811, 293);
insert into doctors (name, lastname, birthday, phone, email, password, logkey) values ('Cathleen', 'Monkleigh', '5/21/1981', '230-568-6301', 'cmonkleigh2@ed.gov', 2134799, 293);
insert into doctors (name, lastname, birthday, phone, email, password, logkey) values ('Gus', 'McCraine', '3/20/1967', '841-718-6531', 'gmccraine3@google.cn', 3953970, 293);
insert into doctors (name, lastname, birthday, phone, email, password, logkey) values ('Constance', 'Lantaff', '4/22/1973', '649-370-8671', 'clantaff4@diigo.com', 3701555, 293);
insert into doctors (name, lastname, birthday, phone, email, password, logkey) values ('Sari', 'Spellacey', '1/3/1997', '493-668-0220', 'sspellacey5@mashable.com', 3983172, 293);

insert into nurses (name, lastname, birthday, phone, email, password, logkey) values ('Sol', 'Cromack', '4/9/1990', '352-561-5593', 'scromack0@woothemes.com', 3518395, 294);
insert into nurses (name, lastname, birthday, phone, email, password, logkey) values ('Manuel', 'Shawel', '4/4/1962', '193-392-4427', 'mshawel1@scientificamerican.com', 4319688, 294);
insert into nurses (name, lastname, birthday, phone, email, password, logkey) values ('Agnes', 'Eynaud', '10/23/1970', '475-430-1062', 'aeynaud2@wisc.edu', 4869886, 294);
insert into nurses (name, lastname, birthday, phone, email, password, logkey) values ('Austina', 'Keets', '2/8/1998', '355-296-3635', 'akeets3@hp.com', 4707431, 294);
insert into nurses (name, lastname, birthday, phone, email, password, logkey) values ('Tonye', 'Sutcliffe', '9/27/1966', '239-210-3202', 'tsutcliffe4@prlog.org', 3509857, 294);
insert into nurses (name, lastname, birthday, phone, email, password, logkey) values ('Hi', 'Plunket', '5/29/1988', '196-544-3065', 'hplunket5@paginegialle.it', 1992399, 294);

insert into patients (name, lastname, birthday, phone, email, password, logkey) values ('Estelle', 'Harbisher', '9/25/2000', '587-729-7456', 'eharbisher0@yelp.com', 2685807, 295);
insert into patients (name, lastname, birthday, phone, email, password, logkey) values ('Vernon', 'Sandeman', '3/27/1978', '200-575-5064', 'vsandeman1@lycos.com', 3120812, 295);
insert into patients (name, lastname, birthday, phone, email, password, logkey) values ('Wang', 'Keigher', '4/24/1973', '253-900-0798', 'wkeigher2@tinyurl.com', 2702816, 295);
insert into patients (name, lastname, birthday, phone, email, password, logkey) values ('Curtice', 'Wrightham', '9/10/1966', '635-417-9529', 'cwrightham3@cocolog-nifty.com', 4717325, 295);
insert into patients (name, lastname, birthday, phone, email, password, logkey) values ('Siffre', 'Rabbe', '7/23/1999', '152-795-9944', 'srabbe4@networksolutions.com', 3774380, 295);
insert into patients (name, lastname, birthday, phone, email, password, logkey) values ('Melesa', 'Ferrelli', '5/8/1978', '985-272-2289', 'mferrelli5@nps.gov', 4353405, 295);

select * from nurses
--Orik Gashi--

create table DoctorsCardsData(

DoctorId int identity(1,1),
DoctorName varchar(500),
Department varchar(500),
PhotoFileName varchar(500),
CV varchar(500)

)


insert into doctorsCardsData values('Filan Fisteku','Neurology','doc1.png','Filan_Fisteku_CV.docx');
select * from doctorsCardsData

create table Departments(
	DepartmentId int identity(1,1),
	DepartmentName varchar(500)

)

select * from Departments
insert into Departments values('Cardiology')


create table Department(
	departamentid int identity(1,1),
	departmentname varchar (255),
	departmentrooms varchar (255),
	departmentdescription varchar (255)
)
insert into department values ('Cardiology', 'Cardiology', 'Kontrolli te Zemres');


create table dietFood(
        dietFoodid int identity (1,1),
		dietName varchar(255),
		allowedFoods varchar(255),
		notallowedFoods varchar(255),
		proteins varchar(255),
		PhotoFileName varchar(500),
)


select * from dietFood
insert into dietFood(dietName, allowedFoods, notallowedFoods, proteins, PhotoFileName) values ('Mediterranean Diet', 'Fruits, veggies, grains, beans, nuts, olive oil and flavorful herbs and spices', 'Sweets and red meat is not allowed', 'Fiber-packed produce and whole grains.','healthy.png')
insert into dietFood(dietName, allowedFoods, notallowedFoods, proteins, PhotoFileName) values ('Flexitarian Diet', 'Veggie hash with eggs, oatmeal with hazelnuts, soup, greek yogurt with berries, quiche', 'Fried things, breaded, baked, grilled, broiled and steamed', 'Fiber-packed produce and grains','healthy.png')
insert into dietFood(dietName, allowedFoods, notallowedFoods, proteins, PhotoFileName) values ('Weight Watchers Diet', 'Egg, bacon and avocado sandwiches, spinach salad, classic lasagna, chicken soup, red meat, oatmea ', 'No foods are off limits', 'Fiber-packed produce, grains, beans','healthy.png');
insert into dietFood(dietName, allowedFoods, notallowedFoods, proteins, PhotoFileName) values ('Nordic Diet', 'Fruits, vegetables, root veggies, grains: rye,barley and oats, salmon, yougurt and other low-fat diary.', 'Grilled or smoked meats, white bread, convenience foods', 'Fiber-packed produce, grains, beans, seeds, nuts','healthy.png')



 create table room(
	dhomaid int identity (1,1),
	nrdhomes varchar(255),
	kapaciteti varchar(255),
	departamenti varchar(255)
 )  

insert into room (nrdhomes, kapaciteti, departamenti) values (5, 15, 'Cardiology');
insert into room (nrdhomes, kapaciteti, departamenti) values (1, 19, 'Nurology');
insert into room (nrdhomes, kapaciteti, departamenti) values (11, 12, 'Stomatology');
insert into room (nrdhomes, kapaciteti, departamenti) values (8, 10, 'Oncology');
insert into room (nrdhomes, kapaciteti, departamenti) values (7, 17, 'Pnumonology');

select * from room



create table Laboratori(
laboratoriId int identity (1,1),
llojianalizes varchar (255),
cmimianalizes varchar(255)
)

insert into Laboratori ( llojianalizes, cmimianalizes) values ('VitaminD', '€24,57');
insert into Laboratori ( llojianalizes, cmimianalizes) values ('Urea', '€83,20');
insert into Laboratori ( llojianalizes, cmimianalizes) values ('Magnezi', '€78,75');
insert into Laboratori ( llojianalizes, cmimianalizes) values ('Tsh', '€44,78');
insert into Laboratori ( llojianalizes, cmimianalizes) values ('Glukoza', '€68,53');
insert into Laboratori ( llojianalizes, cmimianalizes) values ('Hemoglobina', '€80,71');
insert into Laboratori ( llojianalizes, cmimianalizes) values ('Kolesteroli', '€60,83');
insert into Laboratori ( llojianalizes, cmimianalizes) values ('Crp', '€13,12');
insert into Laboratori ( llojianalizes, cmimianalizes) values ('Kalciumi', '€109,02');
insert into Laboratori ( llojianalizes, cmimianalizes) values ('Formula Leukocitare', '€40,72');

create table orari(
orariID int identity(1,1),
Doktori varchar(255),
dita varchar(255),
Fillimi varchar(255),
Mbarimi varchar(255)
)


create table orarinur(
orariID int identity(1,1),
Nurse varchar(255),
dita varchar(255),
Fillimi varchar(255),
Mbarimi varchar(255)
)

insert into orarinur (Nurse, dita, Fillimi,Mbarimi) values ('Anne Twist','E Merkur','10:00', '20:00')
insert into orarinur (Nurse, dita, Fillimi,Mbarimi) values ('Sol Cromack','E Hene','10:00', '20:00')
insert into orarinur (Nurse, dita, Fillimi,Mbarimi) values ('Anne Twist','E Merkur','10:00', '20:00')