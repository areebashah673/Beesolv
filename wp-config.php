<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'Beesolv' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'bPlQSRC*)>Y]Xb&UZmS[.>ECx{N,-R;LZsZQ R{&jnQK44L7@+(pv3@4i/CXwv+y' );
define( 'SECURE_AUTH_KEY',  '=eL,J 4D%QAfM@E&;pYg`EAc*2(0yFp~59Bu~fZOd7ZLYX:X6!NJ:7|XCi?];4_k' );
define( 'LOGGED_IN_KEY',    'xU65g20rxlN~rbml!oV`YJm$g6^U4NRhn.rB%>GcTdQs457TE*xs=QWZ0!.G$-X|' );
define( 'NONCE_KEY',        'wp]4(CZcC4m4CVG<`Y+C.B@b3d2+#AL;n,SBbq)P9~9lwdq*|3}u7tOC(Qbpf6|g' );
define( 'AUTH_SALT',        'I=TD!dc]mu(-j zp+;D-Yyt](&+|_+%po:--ee(Cq(LL|Lz)dRrO0e(k,d]7yIYI' );
define( 'SECURE_AUTH_SALT', ' 0Q6l@4eQMQ8lOemRg$VONuK.K}+>]*ih5cESj~X*qhKFkT28<fI`Q 9HSM-2zsD' );
define( 'LOGGED_IN_SALT',   '$bV|]R)re9AL4sC3lw/J%!>{aF+7+fB<s3N5Lx|!5+Ij`GNtetFuo<=sB7U7(sww' );
define( 'NONCE_SALT',       '0*Ao?@l&Y1js9{5 NNtg-Xk3g,KFL#GC!e+&&]F4qhB@[~8f}!#E#zW@TRpf?yBG' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_Beesolv';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
