<?php
function generateUserId(int $number): string {
    return 'M' . str_pad($number, 4, '0', STR_PAD_LEFT);
}