# La empresa que he elegido es TrackFlow.

Esta es mi elección porque en mi día a día en el trabajo me encargo (en pequeña escala) a algo parecido (compras, seguimiento de pedidos...) y creo que me podría ayudar a mejorar como gestionamos las cosas ahora mismo. Ellos trabajan con 8 transportistas distintos (lo que les hace estar mirando cada uno por separado) y nosotros nos ocurre algo parecido con cada pedido a los distintos almacenes (ya sean aquí en Coruña o pedidos por internet). Me gustaría ver más a fondo como gestionan las incidencias con proveedores y clientes, como gestionan informáticamente la comunicación entre todas las partes (los dos sistemas, local como global...) ya que por WhatsApp y drive no creo que pueda ser eficiente para una empresa de esta magnitud.

## Última milla y gestión de transportistas, Operaciones de almacén, Logística inversa y Tecnología junto Dirección ejecutiva

Última milla y gestión de transportistas: Es lo que más se parece a lo que hago, ya que es importante saber que transportista (proveedor en mi caso) es mejor según lo que interese más a cada cliente: 
- tiempo de entrega
- manejo de paquete
- atención al cliente
- cosas que ofrecen a mayores
- horarios y costes

Sin estos datos es imposible llevar un registro de cada transportista actualizado para mejorar el servicio. Llevar un seguimiento manual de todo es inviable e ineficiente.

Operaciones de almacén: Al igual que el anterior departamento el llevar registros e inventario unificados (y no en distintos sistemas) podría ahorrar tanto tiempo como incidencias generadas. 

Logística inversa: Tener que pasar todas las decisiones por una cadena de mando genera mucho retraso cuando puede tener una solución rápida y sencilla.

Tecnología y Dirección Ejecutiva: Unificar los sistemas que ya hay junto a la dirección ejecutiva mejoraría las decisiones empresariales, la comunicación, la eficiencia general de la empresa al tener todo en el mismo lugar y con la información actualizada.

El reto es poder conectar almacén, gestión de transportistas, logística inversa y dirección ejecutiva en un agente que envuelva, conecte y mejore estos departamentos. Habría que añadir algún departamento más para que pueda ser lo más eficiente posible (por ejemplo atención al cliente para poder gestionar la logística inversa) pero esos son los que más me llaman la atención.


## My AI Agent Idea

La idea de agente que tengo para esta empresa es un Director de operaciones:

- Gestión de almacén con inventario actualizado
- Crear etiquetas a cada paquete que entra y actualizarlo cuando pasa de un estado a otro (aceptado, esperando a ser enviado, rechazado)
- Tener un panel en el que poder todos los pedidos (y poder filtrarlos por agencia, urgencia, incidencia...)
- Crear registros de los transportistas
- Con los registros poder seleccionar el mejor transportista para cada paquete en específico
- Recoger incidencias, devoluciones y generar tickets con las decisiones necesarias (se acepta/rechaza devolución) y por qué
- Sistema único de comunicación (general y específico entre cada departamento) para que cada persona que quiera pueda revisar el estado de cada pedido/devolucion (por ejemplo hay un paquete que no está etiquetado o en un estante que no corresponde y la persona encargada puede ver que pasó con ese paquete, como llegó hasta ahí y los distintos pasos que tuvo desde que entró al almacén)
- Crear informes actualizados del estado general (y específico) del funcionamiento del almacén

Qué información necesitaría:

- Pedidos entrantes: Los emails de pedido de cada cliente, la cantidad, el cliente y la dirección de entrega.
- Inventario de los dos almacenes: El stock de cada pedido y su ubicación (en la nave) en Los Ángeles y en Zaragoza, que hoy están en sistemas distintos.
- Movimientos de cada paquete: Cada cambio de estado (aceptado, esperando envío, rechazado), con la fecha y hora, la persona que lo hizo y la ubicación. Con esto se   reconstruye el recorrido completo de un paquete dentro del almacén.
- Datos de los transportistas: Las tarifas, las zonas que cubre cada uno de los 8 transportistas y su historial de entregas (a tiempo, con retraso, incidencias), para poder recomendar el mejor para cada envío según destino, peso y urgencia.
- Estado de los envíos: La información de seguimiento de cada transportista.
- Incidencias y devoluciones: el motivo, las fotos del producto devuelto y las reglas de devolución de cada cliente, para decidir si se acepta o se rechaza y explicar por qué.
- Personas y departamentos: Quién es responsable de cada área, para enviar cada aviso o ticket a la persona correcta.


