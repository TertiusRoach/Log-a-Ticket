var GetArrays;
(function (GetArrays) {
    var employeeReference = (function () {
        function employeeReference(paramName, paramSurname, paramOccupation, paramDepartment, paramEmail, paramWorkNumber, paramTicketPage) {
            this.name = paramName;
            this.surname = paramSurname;
            this.occupation = paramOccupation;
            this.department = paramDepartment;
            this.email = paramEmail;
            this.number = paramWorkNumber;
            this.ticketPage = paramTicketPage;
        }
        return employeeReference;
    }());
    var ticketReference = (function () {
        function ticketReference(status, subject, description, shortDate, longDate, sender, receiver) {
            this.ticketStatus = status;
            this.subjectText = subject;
            this.descriptionText = description;
            this.shortDate = shortDate;
            this.longDate = longDate;
            this.senderName = sender;
            this.receiverName = receiver;
        }
        return ticketReference;
    }());
    GetArrays.ticketReference = ticketReference;
    var departmentReference = (function () {
        function departmentReference(department) {
            this.department = department;
        }
        return departmentReference;
    }());
    GetArrays.departmentReference = departmentReference;
    function getEmployees() {
        return [
            {
                name: 'Jane',
                surname: 'Lester',
                department: 'Technical',
                ticketPage: 'Logged',
                occupation: 'Technology Lead',
                email: 'jane@email.com',
                number: 276245724,
            },
            {
                name: 'Hammad',
                surname: 'Dean',
                department: 'Technical',
                ticketPage: 'Manage',
                occupation: 'Software Developer',
                email: 'hammad@email.com',
                number: 275590207,
            },
            {
                name: 'Saffron',
                surname: 'Hansen',
                department: 'Technical',
                ticketPage: 'Manage',
                occupation: 'Graphic Designer',
                email: 'saffron@email.com',
                number: 273585978,
            },
            {
                name: 'Dale',
                surname: 'Sutton',
                department: 'Technical',
                ticketPage: 'Manage',
                occupation: 'Studio Technician',
                email: 'dale@email.com',
                number: 276572355,
            },
            {
                name: 'Eshan',
                surname: 'Booker',
                department: 'Admin',
                ticketPage: 'Logged',
                occupation: 'Head of Admin',
                email: 'eshan@email.com',
                number: 277457921,
            },
            {
                name: 'Theodore',
                surname: 'Russell',
                department: 'Admin',
                ticketPage: 'Manage',
                occupation: 'Bookkeeper',
                email: 'theodore@email.com',
                number: 274917274,
            },
            {
                name: 'Kady',
                surname: 'Deacon',
                department: 'Admin',
                ticketPage: 'Logged',
                occupation: 'Scheduler',
                email: 'kady@email.com',
                number: 272633372,
            },
            {
                name: 'Tasneem',
                surname: 'Kemp',
                department: 'Maintenance',
                ticketPage: 'Manage',
                occupation: 'Janitor',
                email: 'tasneem@email.com',
                number: 279469254,
            },
            {
                name: 'Conrad',
                surname: 'Guy',
                department: 'Maintenance',
                ticketPage: 'Manage',
                occupation: 'Handyman',
                email: 'conrad@email.com',
                number: 273019790,
            },
            {
                name: 'Danish',
                surname: 'Copeland',
                department: 'Human Resources',
                ticketPage: 'Logged',
                occupation: 'HR Official',
                email: 'danish@email.com',
                number: 273390085,
            },
        ];
    }
    GetArrays.getEmployees = getEmployees;
    function getTickets() {
        return [
            {
                ticketStatus: 'assigned',
                shortDate: "2021-07-06",
                longDate: "Tuesday, 06 July 2021",
                senderName: "Jane Lester",
                receiverName: "Hammad Dean",
                assignedDate: "2021-07-07",
                resolvedDate: undefined,
                deletedDate: undefined,
                deletedNote: undefined,
                subjectText: "From Jane to Hammad",
                descriptionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam at lectus urna duis. Massa vitae tortor condimentum lacinia. Sapien et ligula ullamcorper malesuada. Enim ut tellus elementum sagittis. Massa tempor nec feugiat nisl pretium fusce id velit. Amet mattis vulputate enim nulla aliquet porttitor lacus. Tortor pretium viverra suspendisse potenti nullam ac. Fringilla ut morbi tincidunt augue interdum velit. Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Nibh mauris cursus mattis molestie a. Massa placerat duis ultricies lacus sed turpis tincidunt id. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Lacus vestibulum sed arcu non odio. Justo eget magna fermentum iaculis.",
            },
            {
                ticketStatus: 'pending',
                shortDate: "2021-07-05",
                longDate: "Monday, 05 July 2021",
                senderName: "Hammad Dean",
                receiverName: "Technical",
                assignedDate: undefined,
                resolvedDate: undefined,
                deletedDate: undefined,
                deletedNote: undefined,
                subjectText: "From Hammad to Technical",
                descriptionText: "Curabitur vitae nunc sed velit dignissim. Praesent elementum facilisis leo vel fringilla est ullamcorper. Turpis nunc eget lorem dolor sed. Turpis egestas integer eget aliquet. Dui id ornare arcu odio ut sem nulla pharetra. Eu facilisis sed odio morbi quis commodo odio aenean sed. Vulputate mi sit amet mauris commodo. Viverra nam libero justo laoreet sit amet cursus sit. In iaculis nunc sed augue lacus viverra. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Sit amet consectetur adipiscing elit ut aliquam. Congue eu consequat ac felis donec et odio pellentesque. Nisl pretium fusce id velit. Vestibulum lectus mauris ultrices eros in cursus turpis. Urna condimentum mattis pellentesque id nibh tortor. Gravida rutrum quisque non tellus orci ac auctor. Nibh venenatis cras sed felis eget velit aliquet.",
            },
            {
                ticketStatus: 'assigned',
                shortDate: "2021-07-07",
                longDate: "Wednesday, 07 July 2021",
                senderName: "Jane Lester",
                receiverName: "Eshan Booker",
                assignedDate: "2021-07-09",
                resolvedDate: undefined,
                deletedDate: undefined,
                deletedNote: undefined,
                subjectText: "From Jane to Admin",
                descriptionText: "Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Egestas sed tempus urna et pharetra pharetra massa massa. Quisque egestas diam in arcu. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Semper eget duis at tellus. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Massa tincidunt dui ut ornare lectus sit amet. Sed odio morbi quis commodo odio aenean. In nisl nisi scelerisque eu. Nibh sed pulvinar proin gravida hendrerit lectus. Etiam tempor orci eu lobortis.",
            },
            {
                ticketStatus: 'pending',
                shortDate: "2021-07-08",
                longDate: "Thursday, 08 July 2021",
                senderName: "Eshan Booker",
                receiverName: "Technical",
                assignedDate: undefined,
                resolvedDate: undefined,
                deletedDate: undefined,
                deletedNote: undefined,
                subjectText: "Nulla aliquet porttitor lacus luctus accumsan tortor.",
                descriptionText: "Nulla aliquet porttitor lacus luctus accumsan tortor. Tortor condimentum lacinia quis vel eros donec. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Metus dictum at tempor commodo ullamcorper a lacus. Feugiat in ante metus dictum at tempor commodo ullamcorper. Elit scelerisque mauris pellentesque pulvinar pellentesque. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Fermentum posuere urna nec tincidunt praesent semper feugiat. Sapien faucibus et molestie ac feugiat sed lectus. Aliquet porttitor lacus luctus accumsan tortor posuere ac. In ante metus dictum at tempor. Egestas sed sed risus pretium quam vulputate. Dolor morbi non arcu risus quis varius quam quisque id. Et odio pellentesque diam volutpat commodo. Risus feugiat in ante metus dictum. Ut consequat semper viverra nam libero justo laoreet. Eu lobortis elementum nibh tellus molestie nunc non blandit. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Interdum velit laoreet id donec ultrices tincidunt.",
            },
        ];
    }
    GetArrays.getTickets = getTickets;
    function getDepartments() {
        return [{ department: 'Technical' }, { department: 'Admin' }, { department: 'Maintenance' }, { department: 'Human Resources' }];
    }
    GetArrays.getDepartments = getDepartments;
})(GetArrays || (GetArrays = {}));

//# sourceMappingURL=dist/tools/get-arrays.js.map
