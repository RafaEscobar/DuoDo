const workspaceData = [
    {

        "id": 1,
        "avatar": "https://www.w3schools.com/w3images/avatar2.png",
        "name": "Mi Workspace",
        "description": "Este es un ejemplo de un workspace",
        "created_at": "2024-03-07",
        "created_by": "Usuario123",
        "members": [
            {
                "id": 1,
                "name": "Usuario1",
                "role": "Administrador"
            },
            {
                "id": 2,
                "name": "Usuario2",
                "role": "Miembro"
            },
            {
                "id": 3,
                "name": "Usuario3",
                "role": "Miembro"
            }
        ],
        "projects": [
            {
                "id": 1,
                "name": "Proyecto1",
                "description": "Descripción del Proyecto 1",
                "created_by": "Usuario1",
                "created_at": "2024-03-07"
            },
            {
                "id": 2,
                "name": "Proyecto2",
                "description": "Descripción del Proyecto 2",
                "created_by": "Usuario2",
                "created_at": "2024-03-07"
            }
        ]

    }
]

export { workspaceData }