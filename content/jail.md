### Summary  

The Cook County Jail houses an average of 8,900 inmates each year. The vast majority of this population is awaiting trial. The jail also houses inmates who have been sentenced to a year in jail.  


### Data Inventory  

##### Inmate Booking Table
* [ID] Number used internally for our IMACS SQL Server
* [InmateID] Internal Number used to identify inmates regardless of number of bookings
* [BookingID] Number used to book inmates per arrest
* [InmateName] Inmate Name Last, First
* [InmateFirst] Inmate First Name
* [InmateMiddle] Inmate Middle Name
* [InmateLast] Inmate Last Name
* [InmateSuffix] JR, SR, III etc.
* [InmateAKAName] Inmate Full Name Allias
* [InmateAKAFirst] First Name Allias
* [InmateAKAMiddle] Middle Name Allias
* [InmateAKALast] Last Name Allias
* [InmateAKASuffix] JR, SR, III etc. Name Allias
* [InmateNickName] Nick Name
* [SoundexCode] Specific Code Related To Soundex/ The way last names are pronounced
* [FBI] Number used by the FBI to identify inmates
* [SID] State Criminal ID Number
* [InmateStatusID] Number which represents inmates' level of custody( Sentenced, Pretrial, Mixed, Other)
* [BookingStatusID] Number that represents whether an inmate is Pre-Booked or Unknown
* [IdStatus] Status ID Number
* [PrisonerTypeID] Prisoner type (County, Federal, Oth Jurisdiction etc.)
* [AssignedFacilityIdK] Division Number for Inmate assignment
* [AssignedSectionID] Section within Division of Inmate assignment
* [AssignedCellIdK] Cell within the section and division of inmate assignment
* [AssignedBedIdK] Bed within the section and division of inmate assignment
* [CurrentLocationID] Current Location of Inmate
* [CustodyLevelID] Custody level of inmate (Max, Med, Min)
* [PreBookingBy] Pre Booked By Whom
* [BookingLocationID] Where Inmates were booked at
* [BookingDate] Date of Arrest
* [BookingTime] Time of Arrest
* [BookingBy] Booked By Whom
* [SSN] Social Security Number
* [BirthDate] Date of Birth
* [BirthCity] City of Birth
* [BirthState] State of Birth
* [BirthCountryID] Country of Birth
* [Race] Ethnic Race
* [GenderID] Gender/Sex
* [MaritalStatusID] Whether the inmate is married or not.
* [HeightFeet] Height in Feet
* [HeightInches] Height in Inches
* [Weight] Weight of Inmate
* [HairColorID] Color of hair
* [EyeColorID] Color of eyes
* [BuildID] Muscular size of Inmate
* [ComplexionID] Skin Complexion of Inmate
* [FacialHairID] Facial Hair of Inmate
* [DescentID] Ethnic Descent of Inmate
* [MilitaryBranchID] Any military background of inmate
* [ReligionID] Religious organization inmate identifies with
* [USCitizen] US Citizenship
* [Address1] Inmate Address
* [Address2] Inmate Address
* [City] City Inmate is from
* [State] State Inmate is from
* [ZipCode] Zip Code Inmate is from
* [County] County Inmate is from
* [Country] Country Inmate is from
* [AddressYears] Number of years the inmate resided at said address
* [AddressMonths] Number of months the inmate resided at said address
* [HomePhone] Phone Number of Inmate
* [ContactName] Inmate Emergency Contact Name
* [ContactFirst] Inmate Emergency Contact First Name
* [ContactMiddle] Inmate Emergency Contact Middle Name
* [ContactLast] Inmate Emergency Contact Last Name
* [ContactPhone] Inmate Emergency Contact Phone Number
* [ContactRelationship] Relationship between inmate and the contact person
* [EstimatedReleaseDate] Estimated Date of Inmate Release
* [EstimatedReleaseTime] Estimated Time of Inmate Release
* [ReleaseDate] Date of Inmate Release
* [ReleaseTime] Time of Inmate Release
* [ReleaseReason] Reason Inmate was released
* [ReleaseBy] Inmate Released By Whom.
* [ReleaseClerk] Clerk Who assists in the release of inmate
* [PhotoDate] Photo of inmate
* [WeekendServer] Server Used
* [AgeAtBooking] Age of inmate when booked
* [AgeAtRelease] Age of inmate when released
* [Rearrest] Number related to rearrest record
* [NameConflict] Potential Conflict of Inmate name
* [NameNumber] Potential Conflict of Inmate number
* [AllowChange] Potential edit on inmate record
* [PFSDays] Number of Days for PFS
* [PropertyOverrideBy] Person who authorizes a property
* [PropertyOverrideDate] Date a property override is authorized
* [NCICNumber] National Crime Information Number
* [CreatedDate] Creation date
* [CreatedTime] Creation time
* [CreatedBy] Person who initiates creation
* [ModifiedDate] Modified Date
* [ModifiedTime] Modified Time
* [ModifiedBy] Person who does modification
* [AFIS] Automated Fingerprint Identification System
* [ResidencyType] Type of home where inmate resides
* [AlienNumber] Alien Identification Number
* [ReleaseLocation] Inmate Release Location
* [DriversLicNo] Drivers License
* [DriversLicState] Drivers License State
* [AddressSource] Original source of inmate Address
* [AddrNumber] Address Number
* [AddrStreet] Address Street
* [AddrSuffix] Address Suffix
* [AddrDirection] Direction of Address
* [AddrApt] Apartment Number
* [CellChangeDate] Date of Cell Change
* [CellChangeTime] Time of Cell Change
* [BookingTypeID] Booking Type (New arrest, New booking, remanded by judge)
* [ReleaseFromDate] Inmate Release Date
* [ReleaseThruDate] Inmate Release Thru Date
* [PassportNumber] Inmate passport number
* [upsize_ts] Upsize TS (Unused Column)
* [PFSDiscount] PFS Discount
* [Expunge] Expunged Records
* [Seal] Number used to distinguish a seal in a inmates case
* [PassportCountry] Country an inmates passport is issued from
* [MaidenName] original last prior to a name change
* [NickName] Nickname
* [CitizenCountry] Country from which the citizen comes from
* [DOCNumber] Department of Corrections Number
* [MissingFields] Identifying any incomplete inmate records
* [DNARecord] DNA Record Number
* [PalmPrint] Palm Print Record Number
* [PrimaryName] Primary Name
* [CustodySecurity] Custody Security Level
* [ReleaseNote] Release Note/Tidbits where necessary
* [StatusDate] Status Date
* [PCN] PCN Number
* [OSDPCN] OSDPCN Number
* [PLGUID] PLGUID Number
* [UPDATEDBY] When an inmate record was updated by
* [LegacyId] Inmate Legacy ID
* [IndividualRecordNumber] Internal Individual Record number used

### How to Access the Data
[Cook County Sheriff's Office](http://www.statesattorney.org/about_the_office.html)  
[26th and California Data Project](http://26thandcalifornia.recoveredfactory.net)


#### Filing Methods
* Email: ccso.foiaofficer@cookcountyil.gov
* Fax: Required by law to provide fax number, none listed
* Mail: Cook County Sheriff's Office
    > Attn: Freedom of Information Officer
    > Richard J. Daley Center
    > 50 West Washington, Room 704
    > Chicago, Illinois 60602
    
To access data from the Cook County Sheriff's Office you need to file a request for data under Illinois' Freedom of Information Act.  You can file your request through any of the methods listed below.  Please try to be reasonably specific for the data you are looking for so that they can more easily process your request.