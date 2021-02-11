show databases;
create database PJ_RealEstate;
use PJ_RealEstate;
show tables;

/* sql문 모음집 */
delete from employee where eName = "정민";
alter table employee add unique key (eName);
insert into employee(eName, eAge, ePhoneNumber, eEmail, role) values("정민", 24, "010-3004-8999", "asd@naver.com", "공동대표");
insert into employee(eName, eAge, ePhoneNumber, eEmail, role) values("박지수", 22, "010-3948-8878", "sdf@naver.com", "공동대표");
insert into employee(eName, eAge, ePhoneNumber, eEmail, role) values("이윤환", 22, "010-3948-8890", "dfg@naver.com", "부장");
insert into employee(eName, eAge, ePhoneNumber, eEmail, role) values("최성운", 25, "010-4448-8878", "fgh@naver.com", "사원");
alter table customer add blackCustomer boolean default 0;

create table employee (
employeeID int auto_increment not null,
eName varchar(20),
eAge int,
ePhoneNumber varchar(30),
eEmail varchar(100),
role varchar(10),
primary key (employeeID),
unique key (employeeID, eName)
);

create table customer (
customerID int auto_increment not null,
cName varchar(20),
cRR varchar(30),
cPhoneNumber varchar(30),
cGender varchar(5),
cEmail varchar(100),
cID varchar(20),
cPassword varchar(32),
cBank varchar(20),
cAccount int,
blackCustomer boolean default 0,
primary key (customerID),
unique key (cID, customerID, cRR)
);

create table forSale_Apart (
apartID int auto_increment not null,
employeeID int,
aSellerName varchar(20),
aZipCode varchar(20),
aAddress varchar(100),
aDetailedAddress varchar(100),
aNumOfRoom int,
aNumOfBath int,
aRoomSize varchar(10),
aFloor int,
aUnderGroundParkingLot varchar(10),
aGarages varchar(10),
aMaintenanceCost varchar(100),
aEstimatedPrice varchar(100),
aPrice varchar(100),
primary key (apartID),
unique key (apartID),
foreign key(employeeID) references employee (employeeID)
);

create table forSale_Villa (
villaID int auto_increment not null,
employeeID int,
vSellerName varchar(20),
vZipCode varchar(20),
vAddress varchar(100),
vDetailedAddress varchar(100),
vNumOfRoom int,
vNumOfBath int,
vRoomSize varchar(10),
vFloor int,
vParkingLot varchar(10),
vGarages varchar(10),
vMaintenanceCost varchar(100),
vEstimatedPrice varchar(100),
vPrice varchar(20),
primary key (villaID),
unique key (villaID),
foreign key(employeeID) references employee (employeeID)
);

create table forSale_House (
houseID int auto_increment not null,
employeeID int,
hSellerName varchar(20),
hZipCode varchar(20),
hAddress varchar(100),
hDetailedAddress varchar(100),
hNumOfRoom int,
hNumOfBath int,
hRoomSize varchar(10), 
hFloor int,
hParkingLot varchar(10),
hGarden varchar(10),
hGarages varchar(10),
hEstimatedPrice varchar(100),
hPrice varchar(100),
primary key (houseID),
unique key (houseID),
foreign key(employeeID) references employee (employeeID)
);

/* 고객-직원 연결 */
create table villaSalesApplicationCustomer(
customerID int,
employeeID int,
date varchar(50),
foreign key (customerID) references customer (customerID),
foreign key(employeeID) references employee (employeeID)
);

create table apartmentSalesApplicationCustomer(
customerID int,
employeeID int,
date varchar(50),
foreign key (customerID) references customer (customerID),
foreign key(employeeID) references employee (employeeID)
);

create table houseSalesApplicationCustomer(
customerID int,
employeeID int,
date varchar(50),
foreign key (customerID) references customer (customerID),
foreign key(employeeID) references employee (employeeID)
);

/* 고객-매물 연결 */
create table apartForSaleCustomer (
customerID int,
apartID int, 
foreign key (customerID) references customer (customerID),
foreign key (apartID) references forSale_Apart (apartID)
);

create table villaForSaleCustomer (
customerID int,
villaID int,
foreign key (customerID) references customer (customerID),
foreign key (villaID) references forSale_Villa (villaID)
);

create table houseForSaleCustomer (
customerID int,
houseID int,
foreign key (customerID) references customer (customerID),
foreign key (houseID) references forSale_House (houseId)
);